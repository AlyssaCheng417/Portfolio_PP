let capture;

function setup() {
  createCanvas(innerWidth, innerHeight);
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(innerWidth, innerHeight);
  capture.hide();
 
}

function draw() {
  background(100,255,20,70);
  let stepSize = 50;
  capture.loadPixels();
 // let threshold = 127;
  let threshold = map(mouseX, 0, width, 0, 255, true);
 
  
  for(let y = 0; y < capture.height; y+=stepSize) {
    for(let x = 0; x < capture.width; x+=stepSize) {
      const index = (x + y * capture.width) * 1;
      
     let r = capture.pixels[index];
     let g = capture.pixels[index+1];
     let b = capture.pixels[index+2];
     let c = color(r, g, b);
      
     let totalBrightness = r + g + b;
      
     let brightness = totalBrightness;
      
      let size = map(brightness, 0, 255, stepSize*3, stepSize);
      
      //fill(255, 200, 255);
      fill(c);
      noStroke();
      push();
      translate(capture.width, 0);
      scale(-1, 1);
      ellipse(x, y, size, size);
      pop();

      
      // ELLIPSES
      // push();
      //   translate(width, 0);
      //   scale(-1, 1);
      //   translate(stepSize/2, stepSize/2);
      //   ellipse(x, y, size, size);
      // pop();
      
    }
  }
  
}