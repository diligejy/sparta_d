'use strict';

let update_button = document.querySelector('.update_button');

update_button.addEventListener('click', () => {
        // 여기에 코드를 입력하세요
    $('#mise-info').empty();
    $.ajax({
        type: "GET",
        url: "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99",
        data: {},
        success: function (response, standard) {
            let rows = response["RealtimeCityAir"]["row"];
            let miseInfo = $("#mise-info");
            miseInfo.empty();
            for (let i = 0; i < rows.length; i++) {
                let guName = rows[i]['MSRSTE_NM'];
                let guMise = rows[i]['PM10'];
                let tempHtml = `<li>${guName} : ${guMise}</li>`
                if (guMise > 25){
                    tempHtml = `<li class="danger">${guName} : ${guMise}</li>`
                } 
                $('#mise-info').append(tempHtml);
                }
            }
        }
    )
})
