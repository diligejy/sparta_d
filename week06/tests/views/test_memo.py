import datetime

import jwt
from flask import current_app

from tests.conftest import db


def test_메모장_저장(client):
    url = 'https://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=001&oid=468&aid=0000766755'
    comment = 'tests'

    data = {
        'url_give': url,
        'comment_give': comment,
    }

    # 임의의 유저를 만들어서 메모 등록 요청
    expiration_time = datetime.timedelta(hours=1)
    payload = {
        'id': 'tester',
        # JWT 유효 기간 - 이 시간 이후에는 JWT 인증이 불가능합니다.
        'exp': datetime.datetime.utcnow() + expiration_time,
    }
    token = jwt.encode(payload, current_app.config['JWT_SECRET'])
    headers = {
        'authorization': f'Bearer {token}'
    }
    response = client.post('/memo', data=data, headers=headers)

    # 정상 응답을 받았음
    assert response.status_code == 200

    # mongodb 정상 저장 확인
    memo = db.articles.find_one({'id': 'tester'}, {'_id': False})
    assert memo['comment'] == comment
