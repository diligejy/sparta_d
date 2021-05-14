from flask import Blueprint, render_template, request, jsonify, url_for
from bs4 import BeautifulSoup
import requests
from werkzeug.utils import redirect
from sparta.models import Document


bp = Blueprint('main', __name__, url_prefix='/')


@bp.route('/')
def landing_page():
    return render_template('index.html')


@bp.route('/test')
def redirect_test():
    return redirect(url_for('memo.view_memo_page'))

