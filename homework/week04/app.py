from flask import Flask, render_template, request, jsonify

from pymongo import MongoClient  # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)

app = Flask(__name__)

client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
db = client.week04  # 'dbsparta'라는 이름의 db를 만듭니다.


app = Flask(__name__)


@app.route('/')
def landing_page():
    return render_template('index.html')


@app.route('/view_memo')
def view_memo_page():
    return render_template('memo.html')


@app.route('/post_url_comment', methods=['POST'])
def post_url_comment():
    url_receive = request.form['url_give']
    comment_receive = request.form['comment_give']
    print('URL : ', url_receive)
    print('Comment : ', comment_receive)
    return jsonify({'result': 'success', 'msg': '이 요청은 POST!'})


@app.route('/get_url_comment', methods=['GET'])
def get_url_comment():
    pass


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
