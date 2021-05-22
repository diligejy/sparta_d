// 간단한 회원가입 함수입니다.
// 아이디, 비밀번호, 닉네임을 받아 DB에 저장합니다.
function register() {
    $.ajax({
        type: "POST",
        url: "/memo/api/register",
        data: { id_give: $('#userid').val(), pw_give: $('#userpw').val() },
        success: function (response) {
            if (response['result'] == 'success') {
                alert('회원가입이 완료되었습니다.')
                window.location.href = '/memo/login'
            } else {
                alert(response['msg'])
            }
        }
    })
}
