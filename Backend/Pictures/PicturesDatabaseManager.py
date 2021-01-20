from pymongo import MongoClient
import Constants


class PicturesDatabaseManager:
    def __init__(self):
        database_client = MongoClient(Constants.MONGO_DATABASE_URI)
        self.database = database_client[Constants.MONGO_DATABASE_NAME]

    def insert_picture(self, title, description, file):
        try:
            pictures_collection = self.database.pictures
            inserted_picture = pictures_collection.insert_one({"title": title,
                                                               "description": description,
                                                               "file": file})
            return inserted_picture.inserted_id
        except Exception:
            return False