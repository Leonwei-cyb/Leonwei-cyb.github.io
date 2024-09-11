// Basics of Drawing
// leon wei
// sept 11 2024
//
// Extra for Experts:
// - 2D primitives, color, animation, mouse/keyboard events

const { PrintWriter } = require("c:/Users/0802382/.vscode/extensions/wmcicompsci.cs30-p5-1.7.5/p5types");


function setup() {
  // happens once, at very start
  createCanvas(500, 400);
}

function draw() {
  background(220);
  drawCircles();
  PrintWriter(windowWidth, WindowHeight);
  fill(101,0,255);
  circle(0,0,50);

  fill(150,255,90);
  circle(100,50,30);
}

function drawCircles(){
  fill(101,0,255);
  circle(0,0,50);

  fill(150,255,90);
  circle(100,50,30);

  fill(255,0,0);
  circle(0,height,90);
  circle(width,0,50);
  circle(width,height,90);
  circle(width*0.66,2,90)

  //draw a cirle 2/3 across
  //the screen.
  )
}
