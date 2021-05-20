from flask import Blueprint, render_template, jsonify, request
from pymongo import MongoClient  # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)
from bs4 import BeautifulSoup
import requests
from sparta.models import Document

bp = Blueprint('memo', __name__, url_prefix='/memo')


client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
db = client.get_database('week04')  # 'dbsparta'라는 이름의 db를 만듭니다.

@bp.route('/')
def view_memo_page():
    return render_template('document/memo.html')

@bp.route('/create_url_comment', methods=['POST'])
def create_url_comment():
    url_receive = request.form['url_give']
    comment_receive = request.form['comment_give']

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

    document = {
        'title': title['content'],
        'url': url['content'],
        'image': image['content'],
        'description': description['content'],
        'comment': comment_receive,
    }
    db.week04.insert_one(document)
    return jsonify({'result': 'success', 'msg': '이 요청은 POST!'})


@bp.route('/show_url_comment', methods=['GET'])
def get_url_comment():
    memos = list(db.week04.find({},  {'_id': False}))
    result = {
        'result': 'success',
        'articles': memos
    }
    return jsonify(result)

@bp.route('/test')
def test_view():
    document_list = Document.query.order_by(Document.create_date.desc())
    return render_template('document/document_list.html', document_list=document_list)