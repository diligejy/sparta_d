'use strict';

// 버튼을 누른 횟수를 저장할 변수 선언

const click_button = document.querySelector(".click_button");

let count = 0;
click_button_eventHandler = click_button.addEventListener('click', () => {
    // 1. 버튼을 누를 때마다(함수를 호출할 때마다) 누른 횟수 증가
    // 2. 누른 횟수가 20 미만이면 "안녕! {{실제 누른 횟수}} 번 누르셨네요!" alert 창 띄우기
    // 3. 누른 횟수가 20번 이상이면,'앗. 그만 누르세요 이제!' alert 창 띄우기
    count += 1;
    if (count < 20) {
        alert(`안녕! ${count}번 누르셨네요!`);
    } else {
        alert('앗 그만 누르시오 이제!');
    }
});

module.exports.click_button_eventHandler = click_button_eventHandler;
