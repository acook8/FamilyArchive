import flask
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import getCollection
import postCollections
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return "<h1>FamilyArchive API</h1>"


@app.route('/collections', methods=['GET'])
def getCollections():
    if 'collectionId' in request.args:
        collectionId = int(request.args['collectionId'])
        results = getCollection.getCollectionById(collectionId)
    else:
        results = getCollection.getAllCollections()

    return jsonify(results)


@app.route('/objects', methods=['GET'])
def getObjects():
    if 'objectId' in request.args:
        objectId = int(request.args['objectId'])
    else:
        return jsonify(objects)

    results = []

    for object in objects:
        if object['objectId'] == objectId:
            results.append(object)

    return jsonify(results)


@app.route('/addCollection', methods=['POST'])
def postCollection():
    req_data = request.get_json()
    postCollections.newCollection(req_data)

    return "ok"

if __name__ == "__main__":
    app.run(host='0.0.0.0')


