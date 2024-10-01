// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let rX = 50; 
let rY = 50;

function setup() {
  createCanvas(windowWidth / 2, windowHeight);
}

function draw() {
  background(255, 214, 131);

  rX = mouseX;
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
  
  // Draw Sun
  fill(255, 85, 0);
  ellipse(50, 50, 80, 80);
  
  // Draw Middle Ellipse
  fill(255, 210, 82);
  ellipse(600, 800, 2000, 500);
  
  // Draw Lowest Ellipse
  fill(252, 222, 123);
  ellipse(1000, 900, 2000, 500);
  
  // Draw Rectangle that Follows Mouse
  fill(255, 162, 0);
  rect(rX, rY, 70, 25, 10, 0);
}