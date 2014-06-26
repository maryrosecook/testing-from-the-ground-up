var test = require("./test");
var client = require("../client");

test(
  "should draw sun and blue sky in canvas when it is daytime", function() {
    global.XMLHttpRequest = function() {
      this.open = function() {};

      this.send = function() {
        this.onload({
          target: { responseText: '{ "time": "day" }' }
        });
      };
    };

    client.renderer.ctx = function() {
      return {
        canvas: { width: 300, height: 150 },
        fillRect: function(x, y, w, h) {
          test.isEqual(x, 0);
          test.isEqual(y, 0);
          test.isEqual(w, 300);
          test.isEqual(h, 150);
          test.isEqual(this.fillStyle, "blue");
        }
      }
    };

    client.loadTime();
  });
