$(document).ready(function () {
    // index.html 로드가 완료되면 자동으로 showStar() 함수를 호출합니다.
    showStar();
});

function makeCard(name, url, imgUrl, recentWork, like) {
    // 6. 영화인 카드를 만듭니다.
    let tempHtml = `<div class="card">
                                <div class="card-content">
                                  <div class="media">
                                    <div class="media-left">
                                      <figure class="image is-48x48">
                                        <img
                                          src="${imgUrl}"
                                          alt="Placeholder image"
                                        />
                                      </figure>
                                    </div>
                                    <div class="media-content">
                                      <a href="${url}" target="_blank" class="star-name title is-4">${name} (좋아요: ${like})</a>
                                      <p class="subtitle is-6">${recentWork}</p>
                                    </div>
                                  </div>
                                </div>
                                <footer class="card-footer">
                                  <a href="#" onclick="likeStar('${name}')" class="card-footer-item has-text-info">
                                    위로!
                                    <span class="icon">
                                      <i class="fas fa-thumbs-up"></i>
                                    </span>
                                  </a>
                                  <a href="#" onclick="deleteStar('${name}')" class="card-footer-item has-text-danger">
                                    삭제
                                    <span class="icon">
                                      <i class="fas fa-ban"></i>
                                    </span>
                                  </a>
                                </footer>
                              </div>`

    // 7. #star-box에 temp_html을 붙입니다.
    $('#star-box').append(tempHtml)

}

function showStar() {
    // 1. #star_box의 내부 html 태그를 모두 삭제합니다.
    // 2. 서버에 1) GET 방식으로, 2) /api/list 라는 주소로 stars_list를 요청합니다.
    // 3. 서버가 돌려준 stars_list를 stars라는 변수에 저장합니다.
    // 4. for 문을 활용하여 stars 배열의 요소를 차례대로 조회합니다.
    // 5. stars[i] 요소의 name, url, img_url, recent_work, like 키 값을 활용하여 값을 조회합니다.
    // 6. 영화인 카드를 만듭니다.
    // 7. #star-box에 tempHtml을 붙입니다.


    // 1. #star_box의 내부 html 태그를 모두 삭제합니다.
    $('#star-box').empty()
    $.ajax({
        type: 'GET',
        url: '/favorite/api/list',
        data: {},
        success: function (response) {
            // 3. 서버가 돌려준 star_list를 star라는 변수에 저장합니다.
            let stars = response['stars_list']
            // 4. for 문을 활용하여 star 배열의 요소를 차례대로 조회합니다.
            for (let i = 0; i < stars.length; i++) {
                let star = stars[i]
                // 5. star[i] 요소의 name, url, img_url, recent, like 키 값을 활용하여 값을 조회합니다.
                let name = star['name']
                let url = star['url']
                let imgUrl = star['img_url']
                let recentWork = star['recent']
                let like = star['like']
                makeCard(name, url, imgUrl, recentWork, like);
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