from flask import Blueprint, render_template, request, jsonify
from pymongo import MongoClient
import hashlib
import datetime
import jwt
from flask.cli import load_dotenv
import os
bp = Blueprint('memo', __name__, url_prefix='/memo')

client = MongoClient('localhost', 27017)
db = client.week05

# .env 파일을 환경변수로 설정
load_dotenv()
# 환경변수 읽어오기
JWT_SECRET = os.environ['JWT_SECRET']


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
    pw_hash = hashlib.sha256(pw.encode()).hexdigest()

    user = db.users.find_one({'id': id, 'pw': pw_hash}, {'_id': False})

    # 만약 가입했다면
    if user:
        # 로그인 성공 -> JWT 생성
        expiration_time = datetime.timedelta(hours=1)
        payload = {
            'id': id,
            # 발급시간으로부터 1시간동안 JWT 유효
            'exp': datetime.datetime.utcnow() + expiration_time
        }
        token = jwt.encode(payload, JWT_SECRET)
        print(token)
        return jsonify({'result': 'success', 'token': token})
    else:
        return jsonify({'result': 'fail', 'msg': '로그인 실패'})
    # 가입하지 않은 상태


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


@bp.route('/user', methods=['POST'])
def user_info():
    token_receive = request.headers['authorization']
    token = token_receive.split()[1]
    print('token', token)
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=['HS256'])
        print(payload)
        return jsonify({'result': 'success', 'id': payload['id']})
    except jwt.exceptions.ExpiredSignatureError:
        # 에러 대응
        return jsonify({'result': 'fail', 'msg': 'ExpiredSignature'})
