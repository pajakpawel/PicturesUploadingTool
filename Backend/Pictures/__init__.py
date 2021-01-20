from flask import Blueprint

pictures = Blueprint('pictures', __name__)

from . import RestApi
