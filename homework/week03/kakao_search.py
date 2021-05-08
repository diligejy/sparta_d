import requests
import json
import kakao_api_key
kakao_search_url = 'https://dapi.kakao.com/v2/search/web'
headers = {
    'Authorization': 'KakaoAK ' + kakao_api_key.kakao_search_api_key
}

search_word = '송진영'
res_json = requests.get(kakao_search_url, params={
                        'query': search_word}, headers=headers).json()

for doc in res_json['documents']:
    print(f"제목 : { doc['title'] }")
    print(f"url : { doc['url'] }")
    print(f"날짜 : { doc['datetime'] }")
    print(f"내용 : { doc['contents'] }")
    print('---- \n')
