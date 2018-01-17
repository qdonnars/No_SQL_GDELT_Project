from pymongo import MongoClient
import pymongo
import pandas as pd
import unicodedata
# Pour importer les donnees dans mongo : ./mongoimport --db test --collection data --drop --type csv --file /Users/caroline/Downloads/events_b.csv --headerline
# On etablit la connection :
def Impact(country1, country2, month):
    [imp_pos, imp_neg, mention] = [0, 0, 0]
    month = month+201700
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
    return [imp_neg, imp_pos, mention]
