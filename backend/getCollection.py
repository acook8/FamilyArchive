import pymongo
from pymongo import MongoClient


def getCollectionById(collectionId):
    client = MongoClient('192.168.0.26', 27017)
    db = client.FamilyArchive
    collections = db.Collections
    collection = collections.find_one({"_id": collectionId})
    return collection


def getAllCollections():
    client = MongoClient('192.168.0.26', 27017)
    db = client.FamilyArchive
    collections = db.Collections
    allCollections = collections.find()
    results = []
    for collection in allCollections:
        results.append(collection)

    return results



# "_id" : getNextCollectionSequenceValue("collectionId")