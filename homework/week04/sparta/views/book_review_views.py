from flask import Blueprint, render_template


bp = Blueprint('book_review', __name__, url_prefix='/book_review')
@bp.route('/')
def book_review_landing():
    return render_template('book_review/book_review_landing.html')