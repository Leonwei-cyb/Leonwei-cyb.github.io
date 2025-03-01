// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let angle = 5;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  rotateY(frameCount);

  for(let i = 0; i < 360; i += 45){
    push();
    rotate(i)
    boxes(30);
    pop;
  }
}

function boxes(size){
  if (size > 3) {
    rotateZ(angle);
    translate(size*1.5,0);
    box(size);

    boxes(size*.8)
  }
}