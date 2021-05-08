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
    $.ajax({
        type: "POST",
        url: "/memo",
        data: {},
        success: function (response) { // 성공하면
            if (response["result"] == "success") {
                alert(response["msg"]);
            }
        }
    })
}

function showArticles() {
    $.ajax({
        type: "GET",
        url: "/memo",
        data: {},
        success: function (response) {
            if (response["result"] == "success") {
                alert(response["msg"]);
            }
        }
    })
}

function makeCard(url, title, desc, comment, image) { }