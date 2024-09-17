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

  

  ellipse(-20, windowHeight/1.2, 2000, 200);
  if (keyIsPressed) {
    if (key === "a") {
      rY += 10;
      if (rY > height) rY = 0;
    }
  }
  rX = mouseX;
// Draw retangle
  fill(200, 100, 100, 150);
  noStroke();
  ellipse(width * 0.5, height, 1000, 300)
  ellipse(width * 0.3, height 800, 250)
  ellipse(width * 0.5, height - 50, 150, 150)
  fill(255, 213, 0);
  ellipse(-20, windowHeight / 1.2, 2000, 200);
  fill(255, 213, 0);
  rect(rX, rY, 70, 25, 10, 0);
  fill(255, 213, 0);
  ellipse(50, 50, 80, 80);
}
