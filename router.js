// 我們要為路由提供請求的URL和其他需要的GET及POST參數
// 隨後路由需要根據這些資料來執行相應的程式碼
// 我們需要的所有資料都會包含在request物件中，該物件作為onRequest()回呼(callback)函數的第一個參數傳遞
// 但是為了解析這些資料，我們需要額外的Node.JS模組，它們分別是url和querystring模組
// 
// 
//                              url.parse(string).query
//          url.parse(string).pathname     |
//                         |               |
//                       ----- -------------------
// http://localhost:8888/start?foo=bar&hello=world
//                             ---           -----
//                              |              |
//               querystring(string)["foo"]    |
//                                  querystring(string)["hello"]


function route(handle, pathname, response, request) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
  	return handle[pathname](response, request);
  } else {
  	console.log("No request handler found for " + pathname);
  	response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
  	// return "404 not found";
  }
}

exports.route = route;