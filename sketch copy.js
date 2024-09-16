// Basics of Drawing
// leon wei
// sept 11 2024
//
// Extra for Experts:
// - 2D primitives, color, animation, mouse/keyboard events

const { PrintWriter } = require("c:/Users/0802382/.vscode/extensions/wmcicompsci.cs30-p5-1.7.5/p5types");

let mousex = 0;
function setup() {
  // happens once, at very start
  createCanvas(500, 400);
}

function draw() {
  background(220);
  drawCircles();
  Print(mousex, mousey);
  textSize(tSize);
  text((mousex + ", " + mouseY), mousex, mousey);

  fill(255,0,0);
  circle(width*0.5,height*0,5,100);

  fill(0,255,0)

  x = x + 10
  (x > width) x = 0;
  rect(x, height/2, 60);

  fill(255,0,0);
  circle(width*0,5,height*0,5)


  let x = 0;
  fill
  text(mouse)

  if(mouseIsPressed) tSize = random(20,80);
}
function mousePressed(){
  tSize = random(20,80);
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
