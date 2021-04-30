$(document).ready(function () {
    // 창을 새로고침할 때마다 실행할 함수를 여기에 입력합니다.
    $('#book-info').empty();
    showBookInfo();
});

function showBookInfo() {
    $('#book-info').empty();
    $.ajax({
        type: "GET",
        url: "https://openlibrary.org/subjects/love.json?published_in=1900-2000",
        data: {},
        success: function (response) {
            let works = response["works"];
            for (let i = 0; i < works.length; i++) {
                let title = works[i]['title'];
                let author = works[i]['authors'][0]['name'];

                let tempHtml = `<tr>
                        <td>${title}</td>
                        <td>${author}</td>
                      </tr>`;

                $('#book-info').append(tempHtml);
            }
        }
    })

}