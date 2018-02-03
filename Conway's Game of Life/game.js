let world;

function setup() {
    createCanvas(800, 600);

    world = new World(20, 40, 30);
    frameRate(5);
}

function draw() {
    background('black');

    world.draw();
}

function mouseClicked() {
    world.onMouseClick(mouseX, mouseY);
}

function keyPressed() {
  if (key == ' '){
      world.togglePause();
  }
}
