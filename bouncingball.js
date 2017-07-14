var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.style.background = 'lavender';

var x = 100;
var y = 100;

var ball = function(xCoord, yCoord, color) {
  ctx.beginPath();
  ctx.arc(xCoord, yCoord, 25, 0, Math.PI * 2, false);
  ctx.fillStyle = color;
  ctx.fill();
};

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

var moveBall = function() {
  var xOffset = Math.floor(Math.random() * 10) + 5;
  var yOffset = Math.floor(Math.random() * 10) + 5;
  setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball(x, y, 'red');
    x += xOffset;
    y += yOffset;
    if (x >= canvas.width - 26 || x <= 26) {
      xOffset *= -1;
    };
    if (y >= canvas.height - 26 || y <= 26) {
      yOffset *= -1;
    };
  }, 100);
};

moveBall();
