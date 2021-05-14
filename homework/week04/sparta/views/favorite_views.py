from flask import Blueprint, render_template

bp = Blueprint('favorite', __name__, url_prefix='/favorite')

@bp.route('/')
def favorite_landing_page():
    return render_template('favorite/favorite_landing.html')