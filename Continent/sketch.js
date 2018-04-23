let continent;

function setup() {
    createCanvas(innerWidth, innerHeight);

    // I'm using a low frame rate and ContinentDyn here so you can see the 
    // process dynamically. You'll probably want to use Continent normally.
    // Note: number of itterations doesn't need to be too high. After a certain
    // few you can't see any difference. Experiement with the numbers yourself.
    frameRate(1);
    continent = new ContinentDyn(200, 12, 50);
}

function draw(){
    background('black');
    translate(innerWidth / 2, innerHeight / 2);
    continent.show();
}

