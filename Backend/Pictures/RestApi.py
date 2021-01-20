from flask import request, Response
from bson.json_util import dumps

from . import pictures
from .PicturesDatabaseManager import PicturesDatabaseManager

database_manager = PicturesDatabaseManager()


@pictures.route('/pictures/upload', methods=['POST'])
def upload_picture():
    if not request.is_json:
        response = Response("Request must be in JSON format", status=400)
        return response

    request_json = request.get_json()
    required_request_fields = ['title', 'description', 'file']

    if not all(field in request_json for field in required_request_fields):
        response = Response("Request must contain 'title', 'description' and 'file' fields", status=400)
        return response

    insert_result = database_manager.insert_picture(request_json['title'],
                                                    request_json['description'],
                                                    request_json['file'])

    if insert_result:
        response = Response(dumps("Picture uploaded"), status=201)
    else:
        response = Response(dumps("Picture could not be uploaded"), status=500)

    return response
