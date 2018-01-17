from flask import Flask
from flask_restful import reqparse, abort, Api, Resource
import datetime as dt

app = Flask(__name__)
api = Api(app)

# des listes permettant de tester là cohérences des données en entrée
Country_list = ['FRANCE', 'ITALY', 'SPAIN']
Horizon_considered = ['01-01-2016', '01-05-2016']

Horizon_considered = [dt.datetime.strptime(date, '%d-%m-%Y') for date in Horizon_considered]

## foncitons permettant de retourner des messages d'erreurs dans un dictionaire sans faire crasher le front
def abort_if_country_doesnt_exist(country):
    if country not in Country_list:
        abort(404, message="Country {} doesn't exist".format(country))

def abort_if_date_format_is_invalid(init_date, end_date):
    try :
        init_date = dt.datetime.strptime(init_date, '%d-%m-%Y')
        end_date = dt.datetime.strptime(end_date, '%d-%m-%Y')
    except ValueError:
        abort(404, message="Date_format {} or {} doesn't exist".format(init_date))

    if init_date < Horizon_considered[0]:
        abort(404, message="Date {} too young".format(init_date))
    if end_date > Horizon_considered[1]:
        abort(404, message="Date {} too old".format(end_date))



# Requette
class api_beahaviour(Resource):
    def get(self, country, init_date, end_date):
        ### On enregistre en local les variables pour pouvoir traviller dessu
        # args = parser.parse_args() # je crois qu'il n'y en a pas a parser

        ### on test les variables   , init_date, end_date
        abort_if_country_doesnt_exist(country)
        abort_if_date_format_is_invalid(init_date, end_date)

        ### create the request with pymongo (output : les donnees agregées)


        ### add value to the request


        ### create the awnser
        awnser = {'country': country, 'init_date' : init_date, 'end_date' : end_date}
        return awnser, 201

class api_beahaviour2(Resource):
    def get(self):
        return {'message' : 'hello sunshine'} , 200


##
## Actually setup the Api resource routing here
##
api.add_resource(api_beahaviour, '/options/<country>/<init_date>/<end_date>')
api.add_resource(api_beahaviour2, '/')

## je ne comprend pas cette commande
if __name__ == '__main__':
    app.run(debug=True)
