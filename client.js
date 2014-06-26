;(function(exports) {
  exports.loadTime = function() {
    var request = new XMLHttpRequest();
    request.onload = function(data) {
      var time = JSON.parse(data.target.responseText).time;
      var color = time === "day" ? "blue" : "black";
      renderer.fillBackground(color);
    };

    request.open("GET", "/time.json", true);
    request.send();
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
