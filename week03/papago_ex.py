import requests
import papa_api

test_text = '안녕하세욤'
papago_url = 'https://openapi.naver.com/v1/papago/n2mt'
headers = {
    'X-Naver-Client-Id': papa_api.client_id,
    'X-Naver-Client-Secret': papa_api.client_secret,
}
data = {
    'source' : 'ko',
    'target' : 'en',
    'text' : test_text,
    'charset' : 'UTF-8'
}

res_data = requests.post(
    papago_url,
    headers=headers,
    data=data
)

result = res_data.json()
print(result['message']['result']['translatedText'])
