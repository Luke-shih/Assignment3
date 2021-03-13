/*

var xhr = new XMLHttpRequest();
xhr.open('get','https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json',true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send();

xhr.onload = function(response) {
    // console.log(xhr.responseText);
    if(xhr.status == 200){
        let str = JSON.parse(xhr.responseText);
        // console.log(xhr.responseText);
        parseDetail(str);
    }
}

let list=document.getElementById("list");
let src="https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json";
fetch(src).then(function(response){
   return response.json(); // 將資料用 JSON 的格式詮釋程: 物件和陣列的組合
}).then(function(data){
    let product;          
    for(let i=0;i<data.result.results.length;i++){
        let str = data.result.results[i].file;
        let res = str.split("http://");
        product = "http://" + res[1] + "<hr/>";
    }
});
function parseDetail(data) {
    const content = document.querySelector("content");
    const box = document.createElement("div");
    box.className = "box";
    content.appendChild("box");
}

/*
let div = document.createElement("div");  // 創建一個 div
// div.className = "note";                   // div 加上 className
div.id = "cc";                            // div 加上 id 標籤
div.innerHTML = data.result.resultitle;
document.body.appendChild(div);


let text = document.createTextNode("CreateElement example");
div.appendChild(text);
document.body.appendChild(div);
let h2 = document.createElement("h2");
h2.textContent = "Add p element to div";
div.appendChild(h2);
document.body.appendChild(div);
/*
getId.onload = function () {
    // console.log(getId.responseText);
    if (getId.readyState === 4 & getId.status === 200) {
        let str = JSON.parse(getId.responseText);
        // console.log(parseDetail);
        // 渲染網頁
        parseDetail(str);
    }
};
*/



const root = document.querySelector('.content')
let text = document.createElement("div");
text.className = "test";
text.textContent = "加入文字測試";
root.appendChild(text) 

// let p = document.createElement("p");
// p.textContent = "加入文字測試";
// text.appendChild(p)

