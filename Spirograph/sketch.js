let spirograph;

function setup() {
    createCanvas(800, 600);
    background('black');

    spirograph = new Spirograph2(createVector(400, 300), [200, 163, 12], [0.5, 3.58, 14.4], 'red');
}

function draw() {
    spirograph.show();
}

