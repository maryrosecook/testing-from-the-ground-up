;(function(exports) {
  var get = exports.get = function(url, callback) {
    var request = new XMLHttpRequest();
    request.onload = callback;
    request.open("GET", url, true);
    request.send();
  };

  exports.getTime = function(callback) {
    exports.get("/time.json", function(data) {
      callback(JSON.parse(data.target.responseText).time);
    });
  };

  exports.displayTime = function(time) {
    var color = time === "day" ? "blue" : "black";
    renderer.fillBackground(color);
  };

  var renderer = exports.renderer = {
    ctx: function() {
      return document.getElementById("canvas").getContext("2d");
    },

    fillBackground: function(color) {
      var ctx = this.ctx();
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
  };
})(this);
