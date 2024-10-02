// Interactive Scene
// Leon
// Wednesday, October 2, 2024
//
// - Make interactive scene in visual studios


let iSun = true;
let currentBack = 0; 
function setup() {
  createCanvas(windowWidth / 2, windowHeight);
}
 // changes between 4 backgrounds
function draw() {
  switch (currentBack) {
    case 0:
      background(255, 214, 131); // 1st background
      break;
    case 1:
      background(173, 216, 230); // 2nd background
      break;
    case 2:
      background(100, 149, 237); // 3rd background
      break;
    case 3:
      background(255, 165 , 0); // last background
      break;
  }
  // set mouse location with rX and rX
  let rX = mouseX;
  let rY = mouseY;
  
  // changes sun to moon
  print(iSun)
  if (iSun === true) {
    fill(255, 85, 0);
    ellipse(rX, rY, 100, 100); // changes to sun
  } else {
    fill(184, 174, 163);
    ellipse(rX, rY, 100, 100); // changes to moon
  }

  
  // draws sunglasses
  Sunglasses(rX, rY);
  // Draws highest ellipse
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
  
  // draws entrance of pyramid
  fill(80, 60, 40);
  rect(560, 450, 80, 50);
  
  // Draw Middle Ellipse
  fill(255, 210, 82);
  ellipse(600, 800, 2000, 500);
  
  // Draw Lowest Ellipse
  fill(252, 222, 123);
  ellipse(1000, 900, 2000, 500);
  
  // Writes name at bottom left corner
  fill(0);
  textSize(24);
  text("LeonW", 20, height - 20);
}
function Sunglasses(x, y) {
  // Draw left lens
  fill(0);
  ellipse(30 + x, y, 60, 40); // left lens
  // Draw right lens
  ellipse(x - 30, y, 60, 40); // right lens
  // Draw bridge
  fill(0);
  rect(x - 20, y - 10, 40, 20);
}
 

 // Checks if space button is pressed to change sun
function keyPressed() {
  if (key === ' ') {
    iSun = !iSun;
  }
}
 // Checks if middle mouse button is pressed to change backgrounds
function mousePressed() {
  if (mouseButton === CENTER) {
    currentBack = (currentBack + 1) % 4;
  }
}