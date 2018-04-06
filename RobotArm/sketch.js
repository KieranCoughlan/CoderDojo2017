let bodypos;

let arm0angle = 0;
let arm1angle = 0;

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

  drawArm0();

  pop();
}

function drawArm0(){
    push();

    fill('green');
    translate(20, -20);
    rotate(arm0angle);
    rect(25, 0, 50, 10);
    
    drawArm1();

    pop();
}

function drawArm1(){
    push();

    fill('blue');
    translate(50, 0);
    rotate(arm1angle);
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
        arm0angle -= 5;
    }
    
    if (keyIsDown(DOWN_ARROW)){
        arm0angle += 5;
    }

    if (keyIsDown(90)){
        arm1angle -= 5;
    }
    
    if (keyIsDown(88)){
        arm1angle += 5;
    }
}
