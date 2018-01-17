from flask import Flask
from flask_restful import reqparse, abort, Api, Resource
import datetime as dt

from pymongo import MongoClient
import pymongo
import pandas as pd
import unicodedata

app = Flask(__name__)
api = Api(app)

# des listes permettant de tester la coherences des donnees en entree
Country_list = ['FR', 'US', 'SP']
Horizon_considered = ['201701', '201712']

Horizon_considered = [dt.datetime.strptime(date, '%Y%m') for date in Horizon_considered]

## foncitons permettant de retourner des messages d'erreurs dans un dictionaire sans faire crasher le front
def abort_if_country_doesnt_exist(country):
    if country not in Country_list:
        abort(404, message="Country {} doesn't exist".format(country))

def abort_if_date_format_is_invalid(month):
    try :
        month = dt.datetime.strptime(month, '%Y%m')
    except ValueError:
        abort(404, message="Date_format {} or {} doesn't exist".format(month))

    if month < Horizon_considered[0]:
        abort(404, message="Date {} too young".format(month))
    if month > Horizon_considered[1]:
        abort(404, message="Date {} too old".format(month))



# Requette
class api_beahaviour(Resource):
    def get(self, country1, country2, month):
        ### On enregistre en local les variables pour pouvoir traviller dessu
        # args = parser.parse_args() # je crois qu'il n'y en a pas a parser

        ### on test les variables   , init_date, end_date
        abort_if_country_doesnt_exist(country1)
        abort_if_country_doesnt_exist(country2)
        abort_if_date_format_is_invalid(month)

        ### create the request with pymongo (output : les donnees agregees)
        def Impact(country1, country2, month):
            [imp_pos, imp_neg, mention] = [0, 0, 0]
            # Taper le nom du host
            client = MongoClient()
            # On recupere le dataset
            db = client.test
            # On recupere la collection
            col = db.events
            # On recupere les donnees de country1 sur country2 au mois month
            table = db.data.find({'Actor1Geo_CountryCode':country1, 'Actor2Geo_CountryCode':country2, 'MonthYear': month})
            for el in table:
                Gold = el['GoldsteinScale']
                NumMen = el['NumMentions']
                if Gold>0:
                    imp_pos = imp_pos+(Gold*NumMen)
                else:
                    imp_neg = imp_neg+(abs(Gold)*NumMen)
                mention = mention+NumMen
            return imp_neg, imp_pos, mention
                
        ### add value to the request
        imp1_C1_C2_pos, imp1_C1_C2_neg, mention_C1_C2= Impact(country1, country2, int(month))
        imp1_C2_C1_pos, imp1_C2_C1_neg, mention_C2_C1 = Impact(country2, country1, int(month))


        ### create the awnser
        awnser = {'imp1_C1_C2_pos': imp1_C1_C2_pos,
                  'imp1_C1_C2_neg' : imp1_C1_C2_neg,
                  'mention_C1_C2' : mention_C1_C2,
                  'imp1_C2_C1_pos': imp1_C2_C1_pos,
                  'imp1_C2_C1_neg' : imp1_C2_C1_neg,
                  'mention_C2_C1' : mention_C2_C1
                  }
        return awnser, 201

class api_beahaviour2(Resource):
    def get(self):
        return {'message' : 'hello sunshine'} , 200


##
## Actually setup the Api resource routing here
##
api.add_resource(api_beahaviour, '/options/<country1>/<country2>/<month>')
api.add_resource(api_beahaviour2, '/')

## je ne comprend pas cette commande
if __name__ == '__main__':
    app.run(debug=True)
