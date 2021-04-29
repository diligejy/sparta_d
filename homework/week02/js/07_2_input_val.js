let inputValue = document.querySelector('#input-value');
let emptyValid = document.querySelector('.emptyValid');
let box = document.querySelector('.question-box');
let li = document.createElement('li');


emptyValid.addEventListener('click', () => {
        // 1. input-value의 입력값을 가져온다.
    // 2. 만약 입력값이 빈칸이면 if(입력값=='')
    // 3. alert(입력값) 띄우기

    if (inputValue.value.trim() === ''){
        alert('빈값입니다');
    } else {
        li.textContent = `${inputValue.value.trim()}`;
    }
})