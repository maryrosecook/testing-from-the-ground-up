var http = require("http");
var fs = require("fs");

var requestHandler = function (request, response) {
  if (request.url === "/") {
    fs.readFile(__dirname + "/index.html", function (err, data) {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    });
  } else if (request.url === "/client.js") {
    fs.readFile(__dirname + "/client.js", function (err, data) {
      response.writeHead(200, { "Content-Type": "application/javascript" });
      response.end(data);
    });
  } else if (request.url === "/time.json") {
    response.writeHead(200, { "Content-Type": "application/json" });

    var hour = new Date().getHours();
    var time = hour > 6 && hour < 20 ? "day" : "night";

    response.end('{ "time": "' + time + '" }');
  }
};

http.createServer(requestHandler).listen(4000);

exports.requestHandler = requestHandler;
