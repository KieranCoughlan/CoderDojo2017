

function setup() {
    createCanvas(800, 600, WEBGL);


}

function draw() {
    background('black');
    camera(0, 0, sin(frameCount * 0.01) * 100, 0, 0, 0, 0, 1, 0);
    push();
    rotateX(90);
    //translate(0, 0, 0);
    fill("red");
    stroke("green")
    plane(120, 120);
    pop();
}


