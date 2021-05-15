from flask import Blueprint, render_template

bp = Blueprint('memo', __name__, url_prefix='/memo')


@bp.route('/')
def memo_landing():
    pass


@bp.route('/login')
def memo_login():
    return render_template('memo/memo_login.html')


@bp.route('/signup')
def memo_signup():
    return render_template('memo/memo_signup.html')
