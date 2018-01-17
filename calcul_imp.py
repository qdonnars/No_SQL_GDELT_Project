from pymongo import MongoClient
import pymongo
import pandas as pd
import unicodedata
# Pour importer les donnees dans mongo : ./mongoimport --db test --collection data --drop --type csv --file /Users/caroline/Downloads/events_b.csv --headerline
# On etablit la connection :
def Impact(country1, country2, month):
    [imp_pos, imp_neg, NumMen] = [0, 0, 0]
    # Taper le nom du host
    client = MongoClient()
    # On recupere le dataset
    db = client.test
    # On recupere la collection
    col = db.events
    # On recupere les donnees de country1 sur country2 au mois month
    table = db.data.find({'Actor1Geo_CountryCode':country1}, {'_id': 0},{'Actor1Geo_CountryCode':country1},{'MonthYear': '2017'+str(month)})
    i=0
    for el in table:
        if i==0:
            df = pd.DataFrame(el,index=['0',])
        else:
            df = pd.concat([df,pd.DataFrame(el,index=[str(i),])])
        i=i+1
    for j in range(i):
        Gold = df['GoldsteinScale'][j]
        NumMen = df['NumMentions'][j]
        if Gold>0:
            imp_pos = imp_pos+(Gold*NumMen)
        else:
            imp_neg = imp_neg+(abs(Gold)*NumMen)
        mention = mention+NumMen
    return [imp_neg, imp_pos, mention]
