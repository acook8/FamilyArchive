import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

collections = [
    {"collectionId" : 1, "name": "Collection 1", "start_date": "1800", "end_date": "1850", "image_url": "https://previews.123rf.com/images/benchart/benchart1204/benchart120400018/13237662-illustration-of-a-cartoon-opened-brown-book.jpg"},
    {"collectionId" : 2, "name": "Collection 2", "start_date": "1936", "end_date": "1950", "image_url": "https://previews.123rf.com/images/benchart/benchart1204/benchart120400018/13237662-illustration-of-a-cartoon-opened-brown-book.jpg"},
    {"collectionId" : 3, "name": "Collection 3", "start_date": "1956", "end_date": "1970", "image_url": "https://previews.123rf.com/images/benchart/benchart1204/benchart120400018/13237662-illustration-of-a-cartoon-opened-brown-book.jpg"}
]


@app.route('/', methods=['GET'])
def home():
    return "<h1>Distant Reading Archive</h1><p>This site is a prototype API for distant reading of science fiction novels.</p>"


@app.route('/collections', methods=['GET'])
def getCollections():
    if 'collectionId' in request.args:
        collectionId = int(request.args['collectionId'])
    else:
        return jsonify(collections)

    results = []

    for collection in collections:
        if collection['collectionId'] == collectionId:
            results.append(collection)
    
    return jsonify(results)


app.run()



# @app.route('/api/v1/resources/books', methods=['GET'])
# def api_id():
#     # Check if an ID was provided as part of the URL.
#     # If ID is provided, assign it to a variable.
#     # If no ID is provided, display an error in the browser.
#     if 'id' in request.args:
#         id = int(request.args['id'])
#     else:
#         return "Error: No id field provided. Please specify an id."

#     # Create an empty list for our results
#     results = []

#     # Loop through the data and match results that fit the requested ID.
#     # IDs are unique, but other fields might return many results
#     for book in books:
#         if book['id'] == id:
#             results.append(book)

#     # Use the jsonify function from Flask to convert our list of
#     # Python dictionaries to the JSON format.
#     return jsonify(results)