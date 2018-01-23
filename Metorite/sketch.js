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
}

function draw(){
    drawBackground();
    drawCrosshair();

    for (let i = 0; i < NUMBUILDINGS; i++){
        buildings[i].show();
    }
}

function mouseClicked(){
    let m = new Object();
    m.x = mouseX;
    m.y = mouseY;
    
    for (let i = 0; i < NUMBUILDINGS; i++){
        buildings[i].checkHit(m);
    }
}

function drawBackground(){
  background('Navy');
  fill('OliveDrab');

  rect(0, height - GROUNDHEIGHT, width, GROUNDHEIGHT);
}

function drawCrosshair(){
  stroke('White');
  line(mouseX - CROSSHAIRSIZE, mouseY, mouseX + CROSSHAIRSIZE, mouseY);
  line(mouseX, mouseY - CROSSHAIRSIZE, mouseX, mouseY + CROSSHAIRSIZE);
}
