
from pymongo import MongoClient  # pymongo를 임포트 하기(패키지 설치 먼저 해야겠죠?)

client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
db = client.dbsparta  # 'dbsparta'라는 이름의 db를 사용합니다. 'dbsparta' db가 없다면 새로 만듭니다.


# 'movies'라는 collection에 데이터를 생성합니다.
db.movies.insert_one({'name': '덤블도어', 'age': 116})
db.movies.insert_one({'name': '맥고나걸', 'age': 85})
db.movies.insert_one({'name': '스네이프', 'age': 60})
db.movies.insert_one({'name': '해리', 'age': 40})
db.movies.insert_one({'name': '허마이오니', 'age': 40})
db.movies.insert_one({'name': '론', 'age': 40})


# 몽고에서 바로 가져오기
movies_document = db.movies.find(
    # $lte : 이하,
    # $gte : 이상
    # $in : 여러 개 중 하나
    {},  # 검색 조건
    {'_id': False},  # 데이터 표현 방법
)

movies = list(movies_document)  # 바로 DB접속해서 가져오도록

# 아래와 같이 하면 도큐먼트가 바로 나오지 않음
