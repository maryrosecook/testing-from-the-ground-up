;(function(exports) {
  exports.loadTime = function() {
    var request = new XMLHttpRequest();
    request.onload = function(data) {
      var ctx = document.getElementById("canvas").getContext("2d");
      var time = JSON.parse(data.target.responseText).time;
      var skyColor = time === "day" ? "blue" : "black";

      ctx.fillStyle = skyColor;
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };

    request.open("GET", "/time.json", true);
    request.send();
  };
})(this);
