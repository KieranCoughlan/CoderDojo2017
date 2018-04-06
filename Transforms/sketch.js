let sun;
let ground;
let tree;

function setup() {
    createCanvas(800, 600);
    background('black');

    ground = new SnowyGround(400);
    sun = new Sun(30, 30);
    tree = new Tree(300, 450);

    tree.show();
    //ground.show();
    //sun.show();


}

function draw() {

}

