// 用戶可以透過瀏覽器使用我們的應用。
// 當用戶請求http://domain/start時，可以看到一個歡迎頁面，頁面上有一個檔案上傳的表單。
// 用戶可以選擇一個圖片並送出表單，隨後檔案將被上傳到http://domain/upload，該頁面完成上傳後會把圖片顯示在頁面上。

// needs:
// 1. 我們需要提供Web頁面，因此需要一個HTTP伺服器
// 2. 對於不同的請求，根據請求的URL，我們的伺服器需要給予不同的回應，因此我們需要一個路由，用於把請求對應到請求處理程序（request handler）
// 3. 當請求被伺服器接收並透過路由傳遞之後，需要可以對其進行處理，因此我們需要最終的請求處理程序
// 4. 路由還應該能處理POST資料，並且把資料封裝成更友好的格式傳遞給請求處理程序，因此需要請求資料處理功能
// 5. 我們不僅僅要處理URL對應的請求，還要把內容顯示出來，這意味著我們需要一些視圖邏輯供請求處理程序使用，以便將內容發送給用戶的瀏覽器
// 6. 最後，用戶需要上傳圖片，所以我們需要上傳處理功能來處理這方面的細節



var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// 以物件傳送一系列的請求處理程序
// 但如果JavaScript的物件僅僅是鍵/值對的集合，它又怎麼會擁有方法呢？好吧，這裡的值可以是字串、數字或者……函數！

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);