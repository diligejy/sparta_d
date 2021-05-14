from flask import Blueprint, render_template, jsonify


bp = Blueprint('book_review', __name__, url_prefix='/book_review')
@bp.route('/')
def book_review_landing():
    return render_template('book_review/book_review_landing.html')

@bp.route('/create_book_review', methods=['POST'])
def write_review():
    # 1. 클라이언트가 준 title, author, review 가져오기.
	# 2. DB에 정보 삽입하기
	# 3. 성공 여부 & 성공 메시지 반환하기
    return jsonify({'result' : 'success', 'msg' : '리뷰가 성공적으로 작성되었습니다'})