let inputName = document.querySelector('#input-name');
let makeNames = document.querySelector('.makeNames');
let removeNames = document.querySelector('.removeNames');

makeNames.addEventListener('click', () => {
    // 1. input-name 값을 가져온다.
    // 2. 가져온 값을 이용해 names에 붙일 태그를 만든다. (let tempHtml = `<li>박르</li>`)
    // 3. 만들어둔 temp_html을 names에 붙인다.(jQuery의 $('...').append(tempHtml)을 이용하면 굿!)
    if (typeof inputName.value.trim() !== '' & typeof inputName.value.trim() !== null & typeof inputName.value.trim() !== undefined) {
        let tempHtml = `<li>${inputName.value.trim().replace(/(\n|\n|\r)/gm, "")}<li>`;
        $("#names").append(tempHtml);    
    } 
});
removeNames.addEventListener('click', () => {
    $("#names").empty();
})
