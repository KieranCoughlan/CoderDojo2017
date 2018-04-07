let bodypos;

let upperangle = 0;
let lowerangle = 0;

function setup(){
    createCanvas(800, 600);
    angleMode(DEGREES);
    rectMode(CENTER);

    bodypos = createVector(width / 2, height - 100);
}

function draw(){
    background(0);
    handleInput();

    drawBody();
}

function drawBody(){
  push();
  
  fill('yellow');
  translate(bodypos.x, bodypos.y);
  rect(0, 0, 50, 50);

  drawUpperArm();

  pop();
}

function drawUpperArm(){
    push();

    fill('green');
    translate(20, -20);
    rotate(upperangle);
    rect(25, 0, 50, 10);
    
    drawLowerArm();

    pop();
}

function drawLowerArm(){
    push();

    fill('blue');
    translate(50, 0);
    rotate(lowerangle);
    rect(25, 0, 50, 10);

    pop();
}

function handleInput(){
    if (keyIsDown(LEFT_ARROW) && bodypos.x > 50){
        bodypos.x -= 5;
    }
    
    if (keyIsDown(RIGHT_ARROW) && bodypos.x < width - 50){
        bodypos.x += 5;
    }
    
    if (keyIsDown(UP_ARROW)){
        upperangle -= 5;
    }
    
    if (keyIsDown(DOWN_ARROW)){
        upperangle += 5;
    }

    if (keyIsDown(90)){
        lowerangle -= 5;
    }
    
    if (keyIsDown(88)){
        lowerangle += 5;
    }
}
