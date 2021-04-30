// 여기에 코드를 작성하세요.
// 1-1. 이름(order-name) 부분의 값을 가져오고
// 1-2. 만약에 빈 칸이면 alert을 띄워주세요.

// 2-1. 수량(order-count) 부분의 값을 가져오고
// 2-2. 만약에 빈 칸이면 alert을 띄워주세요.

const form = document.querySelector("#order-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;

  const name = form.elements.name.value;
  const count = form.elements.count.value;
  const address = form.elements.address.value;
  const phone = form.elements.phone.value;

  const formData = {
    name,
    count,
    address,
    phone
  };

  insertRow(formData);
});

const table = document.querySelector("#order-result");
function insertRow({ name, count, address, phone }) {
  const row = table.insertRow(-1);
  row.innerHTML = [name, count, address, phone]
    .map((v) => `<td>${v}</td>`)
    .join("");

  form.reset();
}

// const form = document.querySelector('#order-form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const form = e.target;

// })