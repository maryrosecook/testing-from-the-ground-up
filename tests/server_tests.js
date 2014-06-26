var test = require("./test");
var requestHandler = require("../server").requestHandler;
var http = require("http");

test(
  "should respond with index.html when / requested", function(done) {
    http.ServerResponse.prototype.end = function(data) {
      test.isEqual(data.toString().substr(0, 9), "<!doctype");
      done();
    };

    requestHandler({ url: "/" }, new http.ServerResponse({}));
  },

  "should respond with client.js when /client.js requested", function(done) {
    http.ServerResponse.prototype.end = function(data) {
      test.isEqual(data.toString().substr(0, 10), ";(function");
      done();
    };

    requestHandler({ url: "/client.js" }, new http.ServerResponse({}));
  });
