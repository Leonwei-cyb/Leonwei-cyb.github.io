// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rX = 50; let rY = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 214, 131);

  

  
  rX = mouseX;
// Draw retangle
  noStroke();
  
  
  //highest
  fill(247, 210, 85);
  ellipse(1000, 700, 2000, 500)
  
  fill(255, 162, 0);
  
  rect(rX, rY, 70, 25, 10, 0);
  //sun
  fill(255, 213, 0);
  ellipse(50, 50, 80, 80);
  //middle elipse
  fill(226, 197, 101);
  ellipse(600, 800, 2000, 500)
  //loweset elipse
  fill(252, 222, 123);
  ellipse(1000, 900, 2000, 500)
  triangle(30, 75, 58, 20, 86, 75);
  // Pig's head
  fill(255, 182, 193); 
  rect(300, 300, 200, 200, 20); 
  
  // Pig's ears
  fill(255, 105, 180); 
  rect(260, 260, 60, 60, 10); 
  rect(380, 260, 60, 60, 10); 
  
  // Pig's eyes
  fill(0); 
  ellipse(330, 350, 30, 40); 
  ellipse(370, 350, 30, 40); 
  
  // Pig's nose
  fill(255, 105, 180); 
  ellipse(350, 400, 80, 60);
  
  // Pig's nostrils
  fill(0);
  ellipse(335, 400, 10, 20); 
  ellipse(365, 400, 10, 20); 
}
