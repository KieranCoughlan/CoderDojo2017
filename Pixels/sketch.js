

function setup() {
    createCanvas(200, 200);
    //noLoop();
}

function draw() {
  loadPixels();
  
  let pixelIndex = 0;
  let d = pixelDensity();

  for (let j = 0; j < height * d; j++)
  {
      for (let i = 0; i < width * d; i++)
      {
        //let colour = color(255 * (i / (width * d - 1)), 
        //                   0, 
        //                   255 * (j / (height * d - 1)));
        let colour = color(noise(i/100 + frameCount / 10, j/100) * 255, 
                           0, 
                           noise(i/100, j/100 + frameCount / 10) * 255);

        pixels[pixelIndex + 0] = red(colour);
        pixels[pixelIndex + 1] = green(colour);
        pixels[pixelIndex + 2] = blue(colour);
        pixels[pixelIndex + 3] = alpha(colour);
      
        pixelIndex += 4;
      }
  }
  updatePixels();
}


