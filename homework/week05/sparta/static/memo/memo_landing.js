$(document).ready(function () {
    setUserInfo()
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
