// var xhr = new XMLHttpRequest();
// xhr.open('get','https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json',true);
// xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// xhr.send();

// xhr.onload = function(response) {
//     // console.log(xhr.responseText);
//     if(xhr.status == 200){
//         var str = JSON.parse(xhr.responseText);
//         // console.log(xhr.responseText);
//     }
// }

let list = document.getElementById("list");
let src = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json";
fetch(src).then(function(response) {
    return response.json(); // 將資料用 JSON 的格式詮釋程: 物件和陣列的組合
}).then(function(data) {
    parseContent(data)
});


/*
const root = document.querySelector('.box')
let title = document.createElement("div");
title.className = "test";
title.textContent = "標題";
root.appendChild(title)
*/

function parseContent(data) {
    const length = data.result.results.length
    let imageUrl;

    const root = document.querySelector(".content")

    for (let i = 0; i < length; i++) {
        let str = data.result.results[i].file;
        imageUrl = str.split("http://")[1];
        let card = document.createElement("div");
        card.className = 'box'
        card.style.width = "260px"


        root.appendChild(card)

        let scape = document.createElement("img");
        scape.src = `http://${imageUrl}`
        card.appendChild(scape)
    }


    let text = document.createElement("p");
    text.textContent = "加入文字測試";
    root.appendChild(text)

}



// scape.src=result.results.


/*

const root = document.querySelector('.content')
let text = document.createElement("div");
text.className = "test";
text.textContent = "加入文字測試";
root.appendChild(text) 

*/