// 1. input-value의 입력값을 가져온다.
// 2. 만약 입력값이 빈칸이면 if(입력값=='')
// 3. alert(입력값) 띄우기

let inputValue = document.getElementById('input-value');
let clickBtn = document.getElementById('click');

clickBtn.addEventListener('click', () => {
    if (inputValue.value === ''){
        alert('입력을 해야지 이노무시키야');
    }
}, false);

