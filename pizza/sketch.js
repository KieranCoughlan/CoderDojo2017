let end;

function setup() {
  createCanvas(800, 600);
  background(0);

  frameRate(1);
  end = 0;
}

function draw(){
  drawPizza3(width/2, height/2, 0, end);
  end -= QUARTER_PI;
}

function drawPizza3(x, y, start, end) {
  fill("cornsilk");
  ellipse(x, y, 200, 100);
  
  fill("firebrick");
  ellipse(x, y, 180, 90);
  
  fill("ivory");
  ellipse(x + 60, y, 40, 17);
  ellipse(x - 56, y, 43, 14);

  ellipse(x + 10, y + 30, 40, 17);
  ellipse(x - 16, y - 26, 43, 14);

  fill("black");
  arc(x, y, 200, 100, end, start, PIE);
  
}


