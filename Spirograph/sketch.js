let spirograph0;

function setup() {
    createCanvas(800, 600);
    background('black');

    spirograph0 = new Spirograph(410, 300, 180, 43, 0.5, 3.58, 'red');
    spirograph1 = new Spirograph(390, 300, 150, 33, 0.5, 7.1, 'yellow');

}

function draw() {
    spirograph0.show();
    spirograph1.show();
}

