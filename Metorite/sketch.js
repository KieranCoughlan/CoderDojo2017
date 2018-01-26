let buildings = [];
let explosions = [];
let meteorites = [];

let GROUNDHEIGHT = 50;
let CROSSHAIRSIZE = 10;

let NUMBUILDINGS = 30;

function setup(){
    createCanvas(800, 600);

    for (let i = 0; i < NUMBUILDINGS; i++){
        buildings.push(new Building());
    }

    meteorites.push(new Meteorite(buildings[0], 1));
}

function draw(){
    drawBackground();

    for (let i = buildings.length - 1; i >= 0; i--){
        buildings[i].show();
    }

    for (let i = explosions.length - 1; i >= 0; i--){
        explosions[i].show();
    }

    
    for (let i = meteorites.length - 1; i >= 0; i--){
        meteorites[i].move();
        meteorites[i].show();
    }

    drawCrosshair();
}

function mouseClicked(){
    explosions.push(new Explosion(mouseX, mouseY));
}

function drawBackground(){
  background('RoyalBlue');

  fill('OliveDrab');
  rect(0, height - GROUNDHEIGHT, width, GROUNDHEIGHT);

  fill('Yellow');
  ellipse(50, 50, 50);
}

function drawCrosshair(){
  stroke('White');
  line(mouseX - CROSSHAIRSIZE, mouseY, mouseX + CROSSHAIRSIZE, mouseY);
  line(mouseX, mouseY - CROSSHAIRSIZE, mouseX, mouseY + CROSSHAIRSIZE);
}
