import requests
from bs4 import BeautifulSoup

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
naver_movie_url = 'https://movie.naver.com/movie/sdb/rank/rmovie.nhn?sel=pnt&date=20200716'
res = requests.get(
    naver_movie_url,
    headers=headers
)

html = res.text

selector = '#old_content > table > tbody > tr'
title_selector = 'td.title > div > a'
grade_selector = 'td.point'

if res.status_code == 200:
    html = res.text
    soup = BeautifulSoup(html, 'html.parser')
    titles = soup.select(selector)
    rank_num = 1
    for title in titles:
        title_tag = title.select_one(title_selector)
        grade_tag = title.select_one(grade_selector)
        if title_tag:
            print(f'{rank_num}등 : {title_tag.text}, 평점 : {grade_tag.text}')
            rank_num+=1;