var test = require("./test");
var client = require("../client");

test(
  "should parse time from server", function() {
    client.get = function(_, callback) {
      callback({ target: { responseText: '{ "time": "day" }' }});
    };

    client.getTime(function(time) { test.isEqual(time, "day"); });
  },

  "should draw rect of passed size and color when fillBackground() called", function() {
    client.renderer.ctx = function() {
      return {
        canvas: { width: 300, height: 150 },
        fillRect: function(x, y, w, h) {
          test.isEqual(x, 0);
          test.isEqual(y, 0);
          test.isEqual(w, 300);
          test.isEqual(h, 150);
        }
      }
    };

    client.renderer.fillBackground("blue");
  },

  "should draw blue sky when it is daytime", function() {
    client.renderer.fillBackground = function(color) {
      test.isEqual(color, "blue");
    };

    client.displayTime("day");
  });
