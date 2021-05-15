$(document).ready(function () {
    // $("#cards-box").html("");
    // showArticles();
    setUserInfo();
});


function setUserInfo() {
    let userInfo = $('#user-info')
    let token = $.cookie('loginToken')
    if (token === undefined) {
        window.location.href = '/memo/login'
    } else {
        $.ajax({
            type: 'POST',
            url: '/memo/user',
            headers: { 'authorization': `Bearer ${token}` },
            data: {},
            success: function (response) {
                if (response['result'] === 'success') {
                    let id = response['id']
                    userInfo.append(`
                        <div class="btn btn-primary">${id}</div>
                        <button onClick="logOut()" class="btn btn-primary">LOGOUT</button>
                    `)
                }
            }
        })
    }
}


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
    let url_give = $('#post-url').val()
    let comment_give = $('#post-comment').val()

    $.ajax({
        type: "POST",
        url: "/memo",
        data: {
            'url_give': url_give,
            'comment_give': comment_give
        },
        success: function (response) { // 성공하면
            if (response["result"] == "success") {
                alert(response["msg"]);
            }
            window.location.reload();
        }
    })
}

function showArticles() {
    let url_give = $("#post-url").val();
    let comment_give = $("#post-comment").val();

    $.ajax({
        type: "GET",
        url: "/memo",
        data: {
            'url_give': url_give,
            'comment_give': comment_give
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
