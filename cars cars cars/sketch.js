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
  for (let i = 0; i < 20; i++) {
    eastbound.push(new Vehicle(random(width), random(height / 2 + 10, height / 2 +180), 1, random(2,6)));
  }  
  for (let i = 0; i < 20; i++) {
    westbound.push(new Vehicle(random(width), random(height / 2 - 10, height / 2 - 180), -1, random(2,6)));
  }
}

function draw() {
  background(220);
  drawRoad();
  for(let i = 0; i<eastbound.length; i++){
    eastbound[i].action();
  }
  for(let i = 0; i<westbound.length; i++){
    westbound[i].action();
  }
}
//function mouseClicked(){
  //eastbound.push(new Vehicle(random(mouseX), mouseY, 1));
//}

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
  constructor(x, y, dir, speed) {
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.c = color(random(255), random(255), random(255)); 
    this.type = int(random(2)); 
    this.xSpeed = speed;
  }
  action(){
    this.move();
    this.display();
  }
  display(){
    if(this.type===0){
      this.drawCar();
    }

    else if (this.type === 1){
      this.drawTruck();
    }
  } 
  drawCar(){
    fill(this.c);
    
    ellipse(this.x,this.y, 100,40);
    
  }

  drawTruck(){
    fill(this.c);
    rect(this.x,this.y,100,40);
  }
  move() {
    this.x += this.dir * this.xSpeed;

    if (this.x > width) {
      this.x = -100;
    } else if (this.x < -100) {
      this.x = width;
    }
    
  }
}
