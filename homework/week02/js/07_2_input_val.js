// 1. input-email 값을 가져온다.
// 2. 만약 가져온 값에 @가 있으면 (includes 이용하기 - 찾아보자!)
// 3. contact@gmail.com -> gmail 만 추출해서
// 4. alert(도메인 값);으로 띄우기
// 5. 만약 이메일이 아니면 '이메일이 아닙니다.' 라는 얼럿 띄우기

let inputEmail = document.getElementById('input-email');
let clickBtn = document.getElementById('click');

clickBtn.addEventListener('click', () => {
    if (inputEmail.value.includes('@')){
        email_domain = inputEmail.value.split('@')[1].split('.')[0]
        alert(email_domain);
    } else {
        alert('이메일이 아닙니다');
    }
}, false);

