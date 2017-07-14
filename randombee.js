var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var x = 200;
var y = 200;

var drawCircle = function(xPosition, yPosition, radius) {
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 3;
  ctx.arc(xPosition, yPosition, radius, 0, Math.PI *2, false);
  ctx.stroke();
};

var fillCircle = function(color, xPosition, yPosition, radius) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(xPosition, yPosition, radius, 0, Math.PI*2, false);
  ctx.fill();
};

var bee = function(x, y) {
  fillCircle('orange', x, y, 20);
  drawCircle(x, y, 20);
  drawCircle(x-5, y-2, 5);
  drawCircle(x+5, y-2, 5);
  fillCircle('white', x-10, y-27, 10);
  fillCircle('white', x+10, y-27, 10);
  drawCircle(x-10, y-27, 10);
  drawCircle(x+10, y-27, 10);
};

var flyBee = function() {
  setInterval(function() {
    lateralDirection = Math.floor(Math.random() * 2);
    verticalDirection = Math.floor(Math.random() * 2);
    if (x < 40) {
      x++;
    } else if (x > canvas.width - 40) {
      x--;
    } else if (lateralDirection === 1) {
      x++;
    } else if (lateralDirection === 0) {
      x--;
    };
    if (y < 40) {
      y++;
    } else if (y > canvas.height - 40) {
      y--;
    } else if (verticalDirection === 1) {
      y++;
    } else if (verticalDirection === 0) {
      y--;
    };
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bee(x, y);
  }, 10);
};

flyBee();
