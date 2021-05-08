from selenium import webdriver

chromedriver = './chromedriver.exe'
driver = webdriver.Chrome(chromedriver)

genie_url = 'https://www.genie.co.kr/chart/top200?ditc=D&rtm=N&ymd='
driver.get(genie_url)
print("+" * 100)
print(driver.title)   # 크롤링한 페이지의 title 정보
print(driver.current_url)  # 현재 크롤링된 페이지의 url
