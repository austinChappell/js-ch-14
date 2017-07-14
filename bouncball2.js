var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.style.background = 'lavender';

var x = 100;
var y = 100;

var Ball = function(color) {
  ctx.fillStyle = color;
  this.draw();
};

Ball.prototype.draw = function(xCoord, yCoord) {
  ctx.beginPath();
  ctx.arc(xCoord, yCoord, 25, 0, Math.PI * 2, false);
  ctx.fill();
};

var blueBall = new Ball('blue');

// var ball = function(xCoord, yCoord) {
//   ctx.beginPath();
//   ctx.arc(xCoord, yCoord, 25, 0, Math.PI * 2, false);
//   ctx.fillStyle = 'blue';
//   ctx.fill();
// };

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

var moveBall = function() {
  var xOffset = Math.floor(Math.random() * 10) + 5;
  var yOffset = Math.floor(Math.random() * 10) + 5;
  setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    blueBall.draw(x, y);
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
