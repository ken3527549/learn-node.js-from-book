var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    // var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);

    // 設定了接收資料的編碼格式為UTF-8
    // request.setEncoding("utf8");

    // 註冊了 "data" 事件的監聽器
    // request.addListener("data", function(postDataChunk) {
    //   postData += postDataChunk;
    //   console.log("Received POST data chunk '"+
    //   postDataChunk + "'.");
    // });

    // 將請求路由的執行移到end事件處理程序中，以確保它只會當所有資料接收完畢後才觸發，並且只觸發一次
    // request.addListener("end", function() {
    //   route(handle, pathname, response, postData);
    // });

    // 將response物件作為第三個參數傳遞給route()函數，並且，我們將onRequest()處理程序中所有有關response的函數調都移除，因為我們希望這部分工作讓route()函數來完成。
    // response.writeHead(200, {"Content-Type": "text/plain"});
    // var content = route(handle, pathname,);
    // response.write("Hello World");
    // response.write(content);
    // response.end();
  }

  // createServer自帶listen()方法，指定伺服器監聽的埠號
  // onRequest: callback function
  // onRequest有兩個物件request, response，如何運作還沒搞明白
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;