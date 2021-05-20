from flask import Blueprint, render_template
from pymongo import MongoClient

bp = Blueprint('memo', __name__, url_prefix='/memo')


client = MongoClient('localhost', 27017)
db = client.assign05


@bp.route('/')
def _land():
    return render_template('memo/memo_landing.html')
