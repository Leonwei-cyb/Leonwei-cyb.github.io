// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  for(let i = 0; i < POINTS.length; i++){
    points[i].display();
  }
}

function mouseClicked(){
  points.push(new MiniPoint(mouseX,mouseY));
}

class Minipoint{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.c = color(random(255), random(255),random(255));
    this.noiseX = random(10);
    this.noiseY = random(10);
    this.offset = 0.01;
    this.MAS_SPEED = 5;
  }
}

display(){
  fill(this.c);
  noStroke();
  ellipse(this.sampleRate, this.y, this.s);
}

moveBy(){
  let xspeed = map(noise(this.noiseX), 0.1 -this.MAX_SPEED, this.MAX_SPEED);
  let xspeed = map(noise(this.noiseY), 0.1 -this.MAX_SPEED, this.MAX_SPEED);
  this.x += xspeed;
  this.y += yspeed;
  this.noiseX += this.offset;
  this.noiseY += this.offset;


  if(this.y < 0) this.x += width;
  if(this.x > width) this.x -= width;
  if(this)
    
}