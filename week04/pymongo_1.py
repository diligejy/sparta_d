import pymongo

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
