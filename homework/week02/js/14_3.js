$(document).ready(function () {
    // 창을 새로고침할 때마다 실행할 함수를 여기에 입력합니다.
    $('#mean_question_btn').click(function () {
        // $('#book-info').empty();
        let targetNum = $('#magic-num').val();

        if (targetNum == '') {
            alert('숫자를 입력하세요');
            return;
        }

        let targetUrl = 'http://numbersapi.com/' + targetNum;
        $.ajax({
            type: "GET",
            url: targetUrl,
            data: {},
            success: function (response) {
                $("#meaning").text(response);
            }
        })

    });
});
