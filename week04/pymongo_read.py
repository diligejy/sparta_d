from pymongo import MongoClient  # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)

client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
db = client.dbsparta  # 'dbsparta'라는 이름의 db를 사용합니다. 'dbsparta' db가 없다면 새로 만듭니다.

# MongoDB에서 데이터 모두 보기
all_users = list(db.movies.find({}))

print(all_users[0])  # 0번째 결과값을 보기
print(all_users[0]['name'])  # 0번째 결과값의 'name'을 보기

for user in all_users:  # 반복문을 돌며 모든 결과값을 보기
    print(user)


print('---' * 10)
# MongoDB에서 특정 조건의 데이터 모두 보기
same_ages = list(db.users.find({'age': 40}))

for user in same_ages:  # 반복문을 돌며 모든 결과값을 보기
    print(user)

user = db.users.find_one({'name': '덤블도어'})
print(user)

# 그 중 특정 키 값을 빼고 보기
user = db.users.find_one({'name': '덤블도어'}, {'_id': False})
print('특정키 제외', user)
