let buildings = [];
let explosions = [];
let meteorites = [];

let GROUNDHEIGHT = 50;
let CROSSHAIRSIZE = 10;

let NUMBUILDINGS = 30;

let nextMeteoriteIn = 0

function setup() {
    createCanvas(800, 600);

    for (let i = 0; i < NUMBUILDINGS; i++) {
        buildings.push(new Building());
    }
}

function draw() {
    drawBackground();

    for (let i = buildings.length - 1; i >= 0; i--) {
        buildings[i].show();
    }

    for (let i = explosions.length - 1; i >= 0; i--) {
        explosions[i].show();
    }

    for (let i = meteorites.length - 1; i >= 0; i--) {
        meteorites[i].move();
        meteorites[i].show();
    }

    drawCrosshair();

    spawnMeteorites();
}

function spawnMeteorites(){
  if (nextMeteoriteIn < 1) {
    // Send one at the first active, non-targeted building
    for (let i = 0; i < buildings.length; i++){
        if (buildings[i].active == true && buildings[i].targeted == false) {
          meteorites.push(new Meteorite(buildings[i], 1));
          break;
        }
    }
    
    nextMeteoriteIn = random(10, 30);
  }
  else {
    nextMeteoriteIn--;
  }
}

function mouseClicked() {
    explosions.push(new Explosion(mouseX, mouseY));
}

function drawBackground() {
    background('RoyalBlue');

    fill('OliveDrab');
    rect(0, height - GROUNDHEIGHT, width, GROUNDHEIGHT);

    fill('Yellow');
    ellipse(50, 50, 50);
}

function drawCrosshair() {
    stroke('White');
    line(mouseX - CROSSHAIRSIZE, mouseY, mouseX + CROSSHAIRSIZE, mouseY);
    line(mouseX, mouseY - CROSSHAIRSIZE, mouseX, mouseY + CROSSHAIRSIZE);
}
