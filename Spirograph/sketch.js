let spirograph;

function setup() {
    createCanvas(800, 600);
    background('black');

    spirograph = new Spirograph(createVector(400, 300), 200, 43, 0.5, 3.58, 'red');
}

function draw() {
    spirograph.show();
}

