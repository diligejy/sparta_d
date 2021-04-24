let script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


let btn_post_box = document.getElementById('btn-post-box');
let imgUrl = 'https://movie-phinf.pstatic.net/20181019_236/1539926790655oHv5z_JPEG/movie_image.jpg';
let linkUrl = 'https://naver.com/';
let title = '해리포터와 마법사의 돌 영화 정보';
let desc = '기사의 요약 내용이 들어갑니다. 해리 포터(다니엘 래드클리프 분)는 위압적인 버논 숙부(리챠드 그리피스 분)와 냉담한 이모 페투니아 (...';
let comment = '여기에 코멘트가 들어갑니다.';

// 주의: 홑따옴표(')가 아닌 backtick(`)으로 감싸야 합니다.
// Windows: 숫자 1번 키 왼쪽의 버튼을 누르면 backtick(`)이 입력됩니다.
// Mac : 영문으로 전환 후, ₩ 키를 누르면 됩니다.
// backtick을 사용하면 문자 중간에 Javascript 변수를 삽입할 수 있습니다.
let tempHtml = `<div class="card">
                    <img class="card-img-top"
                        src="${imgUrl}"
                        alt="Card image cap">
                    <div class="card-body">
                        <a href="${linkUrl}" class="card-title">${title}</a>
                        <p class="card-text">${desc}</p>
                        <p class="card-text comment">${comment}</p>
                    </div>
                </div>`;


// $('#post-box').css('display') = 'none';

btn_post_box.addEventListener('click', () => {
    let box = $('#post-box');
    let btn = $('#btn-post-box');
    if (box.css('display') === 'block') {
        // post-box를 가리고
        box.hide();
        // 다시 버튼을 클릭하면, 박스 열기를 할 수 있게 텍스트 바꿔두기
        btn.text('포스팅 박스 열기');
    } else {
        // 아니면(눈에 보이지 않으면) post-box를 펴라
        box.show();
        // 다시 버튼을 클릭하면, 박스 닫기를 할 수 있게 텍스트 바꿔두기
        btn.text('포스팅 박스 닫기');
    }
    $('#cards-box').append(tempHtml);
});


