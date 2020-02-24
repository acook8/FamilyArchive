import pymongo
from pymongo import MongoClient


def newCollection(data):
    client = MongoClient('192.168.0.26', 27017)
    db = client.FamilyArchive
    collections = db.Collections

    collectionName = data['collectionName']
    startYear = data['startYear']
    endYear = data['endYear']
    description = data['description']
    storageLocation = data['storageLocation']
    collectionId = getNextCollectionId()

    collection = {
        # "_id": db.system.js.getNextCollectionSequenceValue("collectionId"),
        "_id": collectionId,
        "collectionName": collectionName,
        "startYear": startYear,
        "endYear": endYear,
        "description": description,
        "storageLocation": storageLocation
    }

    collections.insert_one(collection)


# TODO: Optimize this in the future, I'm sure this will take a while with lots of collections
def getNextCollectionId():
    client = MongoClient('192.168.0.26', 27017)
    db = client.FamilyArchive
    collections = db.Collections

    collection_id = 0
    allCollections = collections.find()
    # print(allCollections)
    results = list(allCollections)
    # for collection in allCollections:
    #     results.append(collection)

    for collection in results:
        if collection['_id'] > collection_id:
            collection_id = collection['_id']
    
    collection_id = collection_id + 1
    return collection_id
