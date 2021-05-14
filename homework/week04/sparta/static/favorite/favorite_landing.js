$(document).ready(function () {
    // index.html 로드가 완료되면 자동으로 showStar() 함수를 호출합니다.
    showStar();
});

function showStar() {
    $.ajax({
        type: 'GET',
        url: '/api/list',
        data: {},
        success: function (response) {
            if (response['result'] == 'success') {
                let msg = response['msg'];
                alert(msg);
            }
        }
    });
}

function likeStar(name) {
    $.ajax({
        type: 'POST',
        url: '/api/like',
        data: {},
        success: function (response) {
            if (response['result'] == 'success') {
                let msg = response['msg'];
                alert(msg);
            }
        }
    });
}

function deleteStar(name) {
    $.ajax({
        type: 'POST',
        url: '/api/delete',
        data: {},
        success: function (response) {
            if (response['result'] == 'success') {
                let msg = response['msg'];
                alert(msg);
            }
        }
    });
}