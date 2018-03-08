

function setup() {
    createCanvas(800, 600);
    background('black');
    
    rectMode(CENTER);
    angleMode(DEGREES);
}

function draw() {
    rotate(45);
    translate(200, 100);
    translate(20, 10);
 
    rect(0, 0, 100, 100);
}

