# 5주차 수업

## 웹

1. HTTP - Stateless
2. 쿠키
3. JWT
4. Redirect vs Forward

   - Redirect : 클라이언트한테 보내고 다시 다른 곳에 보내도록 하는 것
   - Forward : ?!

   무튼 둘이 다른 개념

5. Hash
   - 해시의 결과물은 일정한 크기의 암호문으로 바뀜
   - 복원이 불가능(평문이 해시 되면 해시에서 평문 x)
   - 비밀번호를 위한 알고리즘은 우리나라에서 정해주었음.
   - 약점 - 수학적으로는 복원이 불가능하지만, 해커들은 누구나 할만한 해시리스트를 가지고 있는 경우도 있음 (레인보우 테이블)
   - 레인보우 테이블 극복을 위한 기법 : 해시 솔트(Hash Salt)
     - password + 랜덤 문자열 추가(salt)
     - 솔트 추가된 비밀번호를 해시
     - DB에 저장할 때는 (해시 결과물 + 적용한 솔트) 묶어서 저장