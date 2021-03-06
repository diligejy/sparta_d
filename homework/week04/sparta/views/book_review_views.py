from flask import Blueprint, render_template, jsonify, request
from pymongo import MongoClient 

client = MongoClient('localhost', 27017)
db = client.assign04  # 'assign04'라는 이름의 db를 만듭니다.


bp = Blueprint('book_review', __name__, url_prefix='/book_review')
@bp.route('/')
def book_review_landing():
    return render_template('book_review/book_review_landing.html')

@bp.route('/create_book_review', methods=['POST'])
def write_review():
    # 1. 클라이언트가 준 title, author, review 가져오기.
	# 2. DB에 정보 삽입하기
	# 3. 성공 여부 & 성공 메시지 반환하기
    
    title_receive = request.form['title_give']
    author_receive = request.form['author_give']
    review_receive = request.form['review_give']
    review = {
        'title' : title_receive,
        'author' : author_receive,
        'review' : review_receive,
    }
    db.reviews.insert_one(review)
    return jsonify({'result' : 'success', 'msg' : '리뷰가 성공적으로 작성되었습니다'})

@bp.route('/show_book_review', methods=['GET'])
def get_review():
    # 1. DB에서 리뷰 정보 모두 가져오기
    reviews = list(db.reviews.find({}, {'_id': 0}))
    # 2. 성공 여부 & 리뷰 목록 반환하기
    return jsonify({'result': 'success', 'reviews': reviews})