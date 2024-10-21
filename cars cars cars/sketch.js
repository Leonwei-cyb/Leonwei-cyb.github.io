// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let eastbound = [];
let westbound = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
}

function drawRoad() {
  fill(0);
  noStroke();
  rect(0, height / 2 - 200, width, 400);
  stroke(255);
  strokeWeight(5);
  for (let i = 0; i < width; i += 40) {
    line(i, height / 2, i + 20, height / 2);
  }
}
class Vehicle {
  constructor(direction) {
    this.type = random([0, 1]); 
    this.color = color(random(255), random(255), random(255)); 
    this.x = direction === 1 ? random(-width, 0) : random(width, 2 * width); 
    this.y = direction === 1 ? random(height / 3 + 20, height / 2 - 20) : random(height / 2 + 20, 2 * height / 3 - 20);
    this.direction = direction;  
    this.xSpeed = this.direction === 1 ? random(2, 5) : random(-5, -2);  
  }
  display() {
    fill(this.color);
    if (this.type === 0) {
      // Draw a car
      rect(this.x, this.y, 50, 25);
    } else {
      // Draw a truck/van
      rect(this.x, this.y, 80, 30);
    }
  }
}