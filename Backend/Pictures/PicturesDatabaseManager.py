from pymongo import MongoClient
from bson import ObjectId
import Constants


class PicturesDatabaseManager:
    def __init__(self):
        database_client = MongoClient(Constants.MONGO_DATABASE_URI)
        self.database = database_client[Constants.MONGO_DATABASE_NAME]

    def insert_picture(self, title, description, file):
        try:
            pictures_collection = self.database.pictures
            pictures_collection.insert_one({"title": title, "description": description, "file": file})
            return True
        except Exception:
            return False

    def get_all_pictures(self):
        return self.database.pictures.find()

    def delete_picture(self, picture_id):
        delete_result = self.database.pictures.delete_one({"_id": ObjectId(picture_id)})
        if delete_result.deleted_count == 1:
            return True
        return False
