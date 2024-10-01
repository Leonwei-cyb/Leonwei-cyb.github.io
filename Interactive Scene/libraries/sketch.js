// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let rX = 50; 
let rY = 50;
let isSun = true;
let currentBack = 0; 
function setup() {
  createCanvas(windowWidth / 2, windowHeight);
}

function draw() {
  switch (currentBack) {
    case 0:
      background(255, 214, 131);
      break;
    case 1:
      background(135, 206, 235); 
      break;
    case 2:
      background(100, 149, 237); 
      break;
    case 3:
      background(255, 182, 193); 
      break;
  }
  let rX = mouseX;
  let rY = mouseY;
  // change sun
  print(isSun)
  if (isSun === true) {
    fill(255, 85, 0);
    ellipse(rX, rY, 100, 100);
  } else {
    fill(0, 0, 0);
    ellipse(rX, rY, 100, 100);
  }

  
  //highest
  fill(247, 201, 74);
  ellipse(1000, 700, 2000, 500)

  
  // Draw Small Pyramid
  fill(255, 229, 180);
  triangle(50, 600, 125, 400, 200, 600); 
  fill(200, 179, 140); 
  triangle(50, 600, 125, 400, 100, 600); 
  
  // Draw Large Pyramid
  fill(255, 229, 180);
  triangle(400, 500, 600, 140, 800, 500); 
  fill(200, 179, 140); 
  triangle(400, 500, 600, 140, 500, 500); 
  
  fill(80, 60, 40);
  rect(560, 450, 80, 50);
  
  // Draw Middle Ellipse
  fill(255, 210, 82);
  ellipse(600, 800, 2000, 500);
  
  // Draw Lowest Ellipse
  fill(252, 222, 123);
  ellipse(1000, 900, 2000, 500);
  
  fill(0);
  textSize(24);
  text("LeonW", 20, height - 20);
}

function keyPressed() {
  if (key === ' ') {
    isSun = !isSun; // Toggle between sun and moon
  }
}

function mousePressed() {
  if (mouseButton === CENTER) {
    currentBack = (currentBack + 1) % 4;
  }
}