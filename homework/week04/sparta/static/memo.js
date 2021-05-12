$(document).ready(function () {
    $("#cards-box").html("");
    showArticles();
});

function openClose() {
    // id 값 post-box의 display 값이 block 이면(= 눈에 보이면)
    if ($("#post-box").css("display") == "block") {
        // post-box를 가리고
        $("#post-box").hide();
        // 다시 버튼을 클릭하면, 박스 열기를 할 수 있게 텍스트 바꿔두기
        $("#btn-post-box").text("포스팅 박스 열기");
    } else {
        // 아니면(눈에 보이지 않으면) post-box를 펴라
        $("#post-box").show();
        // 다시 버튼을 클릭하면, 박스 닫기를 할 수 있게 텍스트 바꿔두기
        $("#btn-post-box").text("포스팅 박스 닫기");
    }
}

function postArticle() {
    let input_url = document.querySelector('#post-url').value;
    let input_comment = document.querySelector('#post-comment').value;
    $.ajax({
        type: "POST",
        url: "/create_url_comment",
        data: {
            'url_give': input_url,
            'comment_give': input_comment
        },
        success: function (response) { // 성공하면
            if (response["result"] == "success") {
                console.log(response["msg"]);
            }
            window.location.reload();
        }
    })
}

function showArticles() {
    let input_url = document.querySelector('#post-url').value;
    let input_comment = document.querySelector('#post-comment').value;

    $.ajax({
        type: "GET",
        url: "/show_url_comment",
        data: {
            'url_give': input_url,
            'comment_give': input_comment
        },
        success: function (response) { // 성공하면
            if (response['result'] == "success") {
                let articles = response['articles']
                for (let i = 0; i < articles.length; i++) {
                    let title = articles[i]['title']
                    let url = articles[i]['url']
                    let image = articles[i]['image']
                    let description = articles[i]['description']
                    let comment = articles[i]['comment']
                    makeCard(url, title, description, comment, image)
                }
            }
        }
    })
}

function makeCard(url, title, desc, comment, image) {
    let tempHtml = `<div class="card">
                    <img class="card-img-top"
                         src= "${image}""
                         alt="Card image cap">
                    <div class="card-body">
                        <a href="${url}" class="card-title">${title}</a>
                        <p class="card-text">${desc}</p>
                        <p class="card-text comment">${comment}</p>
                    </div>
                </div>`;
    $('#cards-box').append(tempHtml);
}