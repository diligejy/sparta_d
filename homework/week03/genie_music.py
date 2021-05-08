import requests
from bs4 import BeautifulSoup

# year_month_day = input('다음과 같이 날짜를 입력해주세요 20210703 : ')
# if len(year_month_day) != 8:
#     year_month_day = input('잘못입력하셨습니다. \n 다음과 같이 날짜를 입력해주세요 20210703 : ')
# elif


def inputNumber(message):
    userInput = input(message)
    if (userInput.isdecimal()) & (len(str(userInput)) == 8):
        return int(userInput)
    else:
        print('8자리 숫자로 다시 입력하세요')


def genie_top_200(target_date):
    genie_url = 'https://www.genie.co.kr/chart/top200?ditc=D&rtm=N&ymd=' + \
        str(target_date)
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}

    res = requests.get(
        genie_url,
        headers=headers
    )
    html = res.text

    soup = BeautifulSoup(html, 'html.parser')

    common_selector = '#body-content > div.newest-list > div > table > tbody > tr '
    title_selector = 'td.info > a.title.ellipsis'
    singer_selector = 'td.info > a.artist.ellipsis'
    rank_num = 1
    for common in soup.select(common_selector):
        print(f'{rank_num}위 곡 제목 : {common.select_one(title_selector).text.strip()} \n 가수: {common.select_one(singer_selector).text.strip()}')
        rank_num += 1


# MAIN PROGRAM STARTS HERE:
year_month_day = inputNumber("다음과 같이 날짜를 입력해주세요 20210703 : ")

genie_top_200(year_month_day)
