import requests
import json
import naver_book_api
import pprint
pp = pprint.PrettyPrinter(indent=4)
book_name = '프리워커스'
naver_url = f'https://openapi.naver.com/v1/search/book.json?query={book_name}'

headers = {
    'X-Naver-Client-Id': naver_book_api.client_id,
    'X-Naver-Client-Secret': naver_book_api.client_secret,
}

res_data = requests.get(
    naver_url,
    headers=headers
)

pp.pprint(res_data.json())
