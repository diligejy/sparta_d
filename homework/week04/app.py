from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def landing_page():
    return 'Hello, World!'


@app.route('/view_memo')
def view_memo_page():
    return render_template('memo.html')


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
