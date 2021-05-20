

$(document).ready(function () {
    $("#reviews-box").html("");
    showReview();
});

function makeCard(title, author, review) {
    let tempHtml = `<tr> 
                            <td>${title}</td>
                            <td>${author}</td>
                            <td>${review}</td>
                    </tr>`;
    $("#reviews-box").append(tempHtml);
}



function makeReview() {
    // 1. 제목, 저자, 리뷰 내용을 가져옵니다.
    // 2. 제목, 저자, 리뷰 중 하나라도 입력하지 않았을 경우 alert를 띄웁니다.
    // 3. POST /review 에 저장을 요청합니다.
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let review = document.querySelector('#bookReview').value;
    // 2. 제목, 저자, 리뷰 중 하나라도 입력하지 않았을 경우 alert를 띄웁니다.
    if (title == "") {
        alert("제목을 입력해주세요");
        $("#title").focus();
        return;
    } else if (author == "") {
        alert("저자를 입력해주세요");
        $("#author").focus();
        return;
    } else if (review == "") {
        alert("리뷰를 입력해주세요");
        $("#bookReview").focus();
        return;
    }
    $.ajax({
        type: "POST",
        url: "/book_review/create_book_review",
        data: { title_give: title, author_give: author, review_give: review },
        success: function (response) {
            if (response["result"] == "success") {
                alert(response["msg"]);
                window.location.reload();
            }
        }
    })
}

function showReview() {
    // 1. 리뷰 목록을 서버에 요청하기
    // 2. 요청 성공 여부 확인하기
    // 3. 요청 성공했을 때 리뷰를 올바르게 화면에 나타내기

    $.ajax({
        type: "GET",
        url: "/book_review/show_book_review",
        data: {},
        success: function (response) {
            if (response["result"] == "success") {
                let reviews = response['reviews'];
                for (let i = 0; i < reviews.length; i++) {
                    makeCard(reviews[i]['title'], reviews[i]['author'], reviews[i]['review']);
                }
            } else {
                alert("리뷰를 받아오지 못했습니다");
            }
        }
    })
}

function validateLength(obj) {
    let content = $(obj).val();
    if (content.length > 140) {
        alert("리뷰는 140자까지 기록할 수 있습니다.");
        $(obj).val(content.substring(0, content.length - 1));
    }
}