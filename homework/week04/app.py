from flask import Flask, render_template, request, jsonify
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


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
