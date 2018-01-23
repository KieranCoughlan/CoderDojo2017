let firework;
let gravity;
let fps = 60;

function setup() {
    createCanvas(innerWidth, innerHeight);

    frameRate(fps);

    gravity = createVector(0, 9.81);

    let speed = createVector(40, -90);
    firework = new Firework(speed, "yellow", 4, 40, 4, 2);
    
    for (let i = 0; i < 10; i++){
        let angle0 = random(0, TWO_PI);
        let speed0 = random(20, 30);
        let childSpeed0 = createVector(speed0 * sin(angle0), speed0 * cos(angle0));
        let newChild0 = new Firework(childSpeed0, "red", 2, 10, 0, 5);

        for (let i = 0; i < 10; i++){
            let angle1 = random(0, TWO_PI);
            let speed1 = random(2, 30);
            let childSpeed1 = createVector(speed1 * sin(angle1), speed1 * cos(angle1));
            let newChild1 = new Firework(childSpeed1, "blue", 2, 5, 2, 8);
            newChild0.children.push(newChild1)
        }

        firework.children.push(newChild0)
    }

    let position = createVector(100, innerHeight);
    firework.launch(position, createVector(0,0));
}

function draw() {
    background('black');

    firework.draw(1/fps, gravity);
}

