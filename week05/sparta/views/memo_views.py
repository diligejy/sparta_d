from flask import Blueprint, json, render_template, request, jsonify
from pymongo import MongoClient
import hashlib
import datetime
import jwt
from flask.cli import load_dotenv
import os
from bs4 import BeautifulSoup
import requests
bp = Blueprint('memo', __name__, url_prefix='/memo')

client = MongoClient('localhost', 27017)
db = client.week05

# .env 파일을 환경변수로 설정
load_dotenv()
# 환경변수 읽어오기
JWT_SECRET = os.environ['JWT_SECRET']
CLIENT_ID = os.environ['CLIENT_ID']
CALLBACK_URL = os.environ['CALLBACK_URL']
SERVICE_URL = os.environ['SERVICE_URL']


@bp.route('/',  methods=['GET'])
def memo_landing():
    # API 추가
    # 그냥 ['key']면 에러날 수 있으니까 get으로 가져옴(없을 경우 None)
    token = request.cookies.get('loginToken')

    if token:
        try:
            payload = jwt.decode(token, JWT_SECRET, algorithms=['HS256'])
            id = payload['id']
            memos = list(db.articles.find({'id': id}, {'_id': False}))
        except jwt.ExpiredSignatureError:
            memos = []
    else:
        memos = []

    return render_template('memo/memo_landing.html', test='테스트', memos=memos)


@bp.route('/login', methods=['GET'])
def memo_login():
    CLIENT_ID = os.environ['CLIENT_ID']
    CALLBACK_URL = os.environ['CALLBACK_URL']
    SERVICE_URL = os.environ['SERVICE_URL']
    return render_template('memo/memo_login.html', CLIENT_ID=CLIENT_ID, CALLBACK_URL=CALLBACK_URL, SERVICE_URL=SERVICE_URL)

@ bp.route('/api/login', methods=['POST'])
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


@bp.route('/create/article', methods=['POST'])
def save_memo():
    url_receive = request.form['url_give']
    comment_receive = request.form['comment_give']

    token_receive = request.headers['authorization']
    token = token_receive.split()[1]
    try:
        # JWT 페이로드에서 id 확인
        payload = jwt.decode(token, JWT_SECRET, algorithms=['HS256'])
        id = payload['id']

        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
        response = requests.get(
            url_receive,
            headers=headers
        )
        soup = BeautifulSoup(response.text, 'html.parser')

        title = soup.select_one('meta[property="og:title"]')
        url = soup.select_one('meta[property="og:url"]')
        image = soup.select_one('meta[property="og:image"]')
        description = soup.select_one('meta[property="og:description"]')
        print(title['content'])
        print(url['content'])
        print(image['content'])
        print(description['content'])
        document = {
            'title': title['content'],
            'image': image['content'],
            'description': description['content'],
            'url': url['content'],
            'comment': comment_receive,
            'id': id,
        }
        db.articles.insert_one(document)
        return jsonify(
            {'result': 'success', 'msg': '저장했습니다.'}
        )
    except jwt.ExpiredSignatureError:
        return jsonify({'result': 'fail', 'msg': '로그인 시간이 만료되었습니다.'})


@bp.route('/naver', methods=['GET'])
def callback():
    CLIENT_ID = os.environ['CLIENT_ID']
    CALLBACK_URL = os.environ['CALLBACK_URL']
    SERVICE_URL = os.environ['SERVICE_URL']
    return render_template('memo/callback.html', CALLBACK_URL=CALLBACK_URL, CLIENT_ID=CLIENT_ID, SERVICE_URL=SERVICE_URL)

# 네이버 가입 API
@bp.route('/api/register/naver', methods=['POST'])
def api_register_naver():
    naver_id = request.form['naver_id_give']
    print(naver_id)

    # 아직 가입하지 않은 naver id 케이스에서는 가입까지 처리
    if not db.user.find_one({'id': naver_id}, {'_id': False}):
        db.user.insert_one({'id': naver_id, 'pw': ''})

    expiration_time = datetime.timedelta(hours=1)
    payload = {
        'id': naver_id,
        # JWT 유효 기간 - 이 시간 이후에는 JWT 인증이 불가능합니다.
        'exp': datetime.datetime.utcnow() + expiration_time,
    }
    token = jwt.encode(payload, JWT_SECRET)

    return jsonify({'result': 'success', 'token': token})
