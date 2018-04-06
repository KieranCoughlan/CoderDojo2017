function setup(){
    createCanvas(800, 600);
    angleMode(DEGREES);
}

function draw(){
    background(0);

    translate(100, 100);
    rectMode(CENTER);
    fill('yellow');
    rect(0, 0, 30, 30);
    translate(10, -10);
    rotate(-30);
    translate(20, 0);
    rect(0, 0, 40, 10);
    translate(20, 0);
    rotate(60);
    translate(20, 0);
    rect(0, 0, 40, 10);

}
