from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient  # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)

client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
db = client.get_database('week04')  # 'dbsparta'라는 이름의 db를 만듭니다.

app = Flask(__name__)


@app.route('/')
def landing_page():
    return render_template('index.html')


@app.route('/view_memo')
def view_memo_page():
    return render_template('memo.html')


@app.route('/create_url_comment', methods=['POST'])
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


@app.route('/show_url_comment', methods=['GET'])
def get_url_comment():
    memos = list(db.week04.find({},  {'_id': False}))
    result = {
        'result': 'success',
        'articles': memos
    }
    return jsonify(result)


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
