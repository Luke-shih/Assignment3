let travelData;
let startNum = 8;
let firstNum = 0;

let list = document.getElementById("list");
let src = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json";
fetch(src).then(function(response) {
    return response.json(); // 將資料用 JSON 的格式詮釋程: 物件和陣列的組合
}).then(function(data) {
    travelData = data;
    parseContent(travelData, startNum);
});

function parseContent(data, number) {
    // const length = data.result.results.length
    // console.log(data, number)
    let imageUrl;
    const root = document.querySelector(".content"); // 用一個 root 來 抓 content
    // console.log(a, 'a值')
    for (let i = firstNum; i < number; i++) {
        let material = data.result.results[i]; // 資料擷取點
        imageUrl = material.file.split("http://")[1]; // 擷取網址
        let card = document.createElement("div"); // 創建一個 div
        card.className = 'box'; // div 命名
        root.appendChild(card); // 將建立的 card(div) 接在 content 後面

        let scape = document.createElement("img"); // 建立一個常數 scape 然後 建立一個 <img></img> 
        scape.src = `http://${imageUrl}`; // 將 img 接上圖片網址
        card.appendChild(scape); // 將 scape 接在 card 後面

        sTitle = material.stitle; // 要抓的標題地址(網址)
        let title = document.createElement("span"); // 創建一個 p
        title.textContent = sTitle; // 將 p 加入文字(標題位置<地址>)
        card.appendChild(title); // 將 title 接到 box 後面
    }
}

function loadMore() { // 創建一個按鈕，當點擊執行上面的函式
    firstNum += 8;
    startNum += 8;
    parseContent(travelData, startNum);
}
