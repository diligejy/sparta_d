from flask import Blueprint, render_template, request
from pymongo import MongoClient
import hashlib

bp = Blueprint('memo', __name__, url_prefix='/memo')


client = MongoClient('localhost', 27017)
db = client.assign05


@bp.route('/')
def _land():
    return render_template('memo/memo_landing.html')

@bp.route('/login', methods=['GET'])
def login():
    return render_template('memo/memo_login.html')

@bp.route('/signup', methods=['GET'])
def signup():
    return render_template('memo/memo_signup.html')

bp.route('/api/signup', methods=['POST'])
def api_signup():
    id = request.form['id_give']
    pw = request.form['pw_give']

    pw_hash = hashlib.sha256(pw.encode()).hexdigest()
    db.user.insert_one({'id':id, 'pw':pw_hash})

    return jsonify({'result' : 'success'})