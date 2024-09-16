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
  background(220);

  

    rect(-20, windowHeight/1.2, 2000, 200);
  if (keyIsPressed) {
    if (key === "a") {
      rY += 10;
      if (rY > height) rY = 0;
    }
  }
  rX = mouseX;

  fill(50, 150, 255);
  rect(rX, rY, 70, 25, 10, 0);

}
