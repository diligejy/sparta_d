from flask import Blueprint, render_template, request, jsonify
from pymongo import MongoClient
import hashlib
bp = Blueprint('memo', __name__, url_prefix='/memo')

client = MongoClient('localhost', 27017)
db = client.week05


@bp.route('/')
def memo_landing():
    return render_template('memo/memo_landing.html')


@bp.route('/login')
def memo_login():
    return render_template('memo/memo_login.html')


@bp.route('/api/login', methods=['POST'])
def api_login():
    id = request.form['id_give']
    pw = request.form['pw_give']

    # TODO id, pw 검증 후에 JWT 만들어서 리턴


@bp.route('/signup')
def memo_signup():
    return render_template('memo/memo_signup.html')


@bp.route('/api/signup', methods=['POST'])
def api_signup():
    id = request.form['id_give']
    pw = request.form['pw_give']

    # md5, sha1은 안됨. 우리나라에서 어떤 알고리즘 써야할지 정해주었음
    pw_hash = hashlib.sha256(pw.encode()).hexdigest()

    # 회원가입
    db.users.insert_one({'id': id, 'pw': pw_hash})
    return jsonify({'result': 'success'})
