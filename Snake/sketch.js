let snake;

function setup() {
    createCanvas(800, 600);
    frameRate(5);

    snake = new Snake(createVector(400, 300), 10);
}

function draw() {
    background('black');
    snake.move();
    snake.show();
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
      snake.turnLeft();
  }
  else if (keyCode == RIGHT_ARROW) {
      snake.turnRight();
  }
}

