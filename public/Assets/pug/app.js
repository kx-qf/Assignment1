var speed = 3000;
var score = 0;
var bugcatch = 0;
var getBug = document.getElementById("score");
var resetScoreButton = document.getElementById("resetScoreBtn");
var resetSpeedButton = document.getElementById("resetSpeedBtn");
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var hwBug = new Image();
var bug = {x: 0,y: 0,};

var drawBug = () => {
  bug.x = 32 + Math.random() * (c.width - 64);
  bug.y = 32 + Math.random() * (c.height - 64);
  ctx.clearRect(0, 0, c.width, c.height);
  hwBug.src = "bug.png";
  hwBug.onload = function () {
    ctx.drawImage(hwBug, bug.x, bug.y);
  };
};

var position = (event) => {
  var coordinate = c.getBoundingClientRect();
  var x = event.clientX - coordinate.left;
  var y = event.clientY - coordinate.top;

  if (
    x <= bug.x + 32 &&
    bug.x - 32 <= x &&
    y <= bug.y + 32 &&
    bug.y - 30 <= y
  ) {
    return true;
  } else {
    return false;
  }
};

var reset = function () {
  clearInterval(resetBug);

};

function clear() {
  speed = 3000;
  score = 0;
  getBug.innerHTML = score;
  ctx.clearRect(0, 0, c.width, c.height);
  clearInterval(resetBug);
  drawBug();
  resetBug = setInterval(drawBug, speed);
}

function clearSpeed() {
  speed = 3000;
  clearInterval(resetBug);
  drawBug();
  resetBug = setInterval(drawBug, speed);
}

drawBug();
resetBug = setInterval(drawBug, speed);

document.addEventListener("click", (event) => {
  if (position(event)) {
    ++score;
    getBug.innerHTML = score;
    speed -= 300;
    clearInterval(resetBug);
    drawBug();
    resetBug = setInterval(drawBug, speed);
  }
});

resetScoreButton.addEventListener("click", clear);
resetSpeedButton.addEventListener("click", clearSpeed);
