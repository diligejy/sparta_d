let order_complete = document.querySelector('#order_button');

let customer_name = document.querySelector('.customer_name').value;
let nums_of_goods = document.querySelector('.nums_of_goods').value;
let customer_address = document.querySelector('.customer_address').value;
let customer_phone_number = document.querySelector('.customer_phone_number').value;


order_complete.addEventListener('click', function (){
    if (customer_name === ""){
        alert('이름이 비어있읍니다');
    } else if (nums_of_goods === "") {
        alert("주문 수량 선택 안하실겁니까?");
    } else if (customer_address === ""){
        alert("주소를 입력하세요");
    } else if (customer_phone_number === ""){
        alert("핸드폰 번호 입력 하라고오오");
    } else {
        alert('주문이 완료되었습니다');
    }
});


