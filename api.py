from flask import Flask
from flask_cors import CORS
from flask_restful import reqparse, abort, Api, Resource
import datetime as dt

from pymongo import MongoClient
import pymongo
import pandas as pd
import unicodedata

MongoIPClient = '34.238.43.143'
Port = 27025

app = Flask(__name__)
CORS(app)
api = Api(app)

# des listes permettant de tester la coherences des donnees en entree
Country_list = ['AF', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BY',
                 'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BQ', 'BA', 'BW', 'BV', 'BR', 'IO', 'BN', 'BG', 'BF', 'BI', 'KH', 'CM', 'CA', 'CV',
                  'KY', 'CF', 'TD', 'CL', 'CN', 'CX', 'CC', 'CO', 'KM', 'CG', 'CD', 'CK', 'CR', 'HR', 'CU', 'CW', 'CY', 'CZ', 'CI', 'DK',
                   'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FK', 'FO', 'FJ', 'FI', 'FR', 'GF', 'PF', 'TF', 'GA', 'GM',
                    'GE', 'DE', 'GH', 'GI', 'GR', 'GL', 'GD', 'GP', 'GU', 'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HM', 'VA', 'HN', 'HK', 'HU', 
                     'IS', 'IN', 'ID', 'IR', 'IQ', 'IE', 'IM', 'IL', 'IT', 'JM', 'JP', 'JE', 'JO', 'KZ', 'KE', 'KI', 'KP', 'KR', 'KW', 'KG', 
                      'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LI', 'LT', 'LU', 'MO', 'MK', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MH', 'MQ', 'MR', 
                       'MU', 'YT', 'MX', 'FM', 'MD', 'MC', 'MN', 'ME', 'MS', 'MA', 'MZ', 'MM', 'NR', 'NP', 'NL', 'NC', 'NZ', 'NI', 'NE', 'NG', 
                        'NU', 'NF', 'MP', 'NO', 'OM', 'PK', 'PW', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PN', 'PL', 'PT', 'PR', 'QA', 'RO', 'RU', 
                         'RW', 'RE', 'BL', 'SH', 'KN', 'LC', 'MF', 'PM', 'VC', 'WS', 'SM', 'ST', 'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SX', 'SK', 
                          'SI', 'SB', 'SO', 'ZA', 'GS', 'SS', 'ES', 'LK', 'SD', 'SR', 'SJ', 'SZ', 'SE', 'CH', 'SY', 'TW', 'TJ', 'TZ', 'TH', 'TL', 
                           'TG', 'TK', 'TO', 'TT', 'TN', 'TR', 'TM', 'TC', 'TV', 'UG', 'UA', 'AE', 'GB', 'US', 'UM', 'UY', 'UZ', 'VU', 'VE', 'VN', 
                            'VG', 'VI', 'WF','EH','YE','ZM','ZW']


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

# Requête
class api_beahaviour(Resource):
    def get(self, country1, country2, month):

        ### On test les variables, init_date, end_date
        abort_if_country_doesnt_exist(country1)
        abort_if_country_doesnt_exist(country2)
        abort_if_date_format_is_invalid(month)

        ### Create the request with pymongo (output : les données agregées)
        def Impact(country1, country2, month):
            [imp_pos, imp_neg, mention] = [0, 0, 0]
            
            client = MongoClient(MongoIPClient, Port)

            # On recupere le dataset
            db = client.gdelt

            # On recupere les donnees de country1 sur country2 au mois month sur la collection 'events'
            table = db.events.find({'Actor1Geo_CountryCode': country1, 
                                    'Actor2Geo_CountryCode': country2, 
                                    'MonthYear': month})
            
            # On aggrège nos données

            for el in table:
                Gold = el['GoldsteinScale']
                NumMen = el['NumMentions']

                if Gold > 0:
                    imp_pos = imp_pos + (Gold * NumMen)
                else:
                    imp_neg = imp_neg + (abs(Gold) * NumMen)
                mention = mention + NumMen

            #table = pd.DataFrame(list(table))
            #imp_pos = (table['GoldsteinScale'][table['GoldsteinScale'] > 0].astype(int) * table['NumMentions'][table['GoldsteinScale'] > 0]).sum()
            #imp_neg = (table['GoldsteinScale'][table['GoldsteinScale'] < 0].astype(int) * table['NumMentions'][table['GoldsteinScale'] < 0]).sum()

            #mention = table['NumMentions'].sum()

            if mention != 0:
                imp_pos = round(imp_pos / mention, 2)
                imp_neg = round(imp_neg / mention, 2)

            return  imp_pos, imp_neg , mention
                
        ### Add value to the request
        imp1_C1_C2_pos, imp1_C1_C2_neg, mention_C1_C2= Impact(country1, country2, int(month))
        imp1_C2_C1_pos, imp1_C2_C1_neg, mention_C2_C1 = Impact(country2, country1, int(month))

        ### Create the answer
        awnser = {'pays1' : country1,
                  'pays2' : country2,
                  'imp1_C1_C2_pos': imp1_C1_C2_pos,
                  'imp1_C1_C2_neg' : imp1_C1_C2_neg,
                  'mention_C1_C2' : mention_C1_C2,
                  'imp1_C2_C1_pos': imp1_C2_C1_pos,
                  'imp1_C2_C1_neg' : imp1_C2_C1_neg,
                  'mention_C2_C1' : mention_C2_C1
                  }

        return awnser, 201
    
## Actually setup the Api resource routing here

api.add_resource(api_beahaviour, '/<country1>/<country2>/<month>')

if __name__ == '__main__':
    app.run(debug = True)
