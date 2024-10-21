// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let NUM_CIRCLES = 40;
let seed;


function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(100);
}

function draw() {
  randomSeed(seed);
  background(220);
  drawCircles();
}

function drawCircles(){
  noFill();

  letsmallDiameter = Infinity;
  let smallX = -1;
  let smallY = -1;
  for(let i = 0; i < NUM_CIRCLES, i++){
    let x = random(0, width);
    let y = random(0, height);
    let d = random(20,60);
    circle(x, y, d);
    if(d < smallDiameter){
      small Diametere = d;
      smallX = x;
      smallY = y;
    }
  }
  fill(225,0,123);
  text(smallDiameter, width/2, height/2);
  circle(smallX, smallY, smallDiameter);
  
}