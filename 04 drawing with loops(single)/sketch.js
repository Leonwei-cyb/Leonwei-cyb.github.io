// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  myBackground();
  myForeground();

}
function myBackground() {
  // use some loops for gradient background
  background(200);
  
}

function myForeground() 
  // use some loops for gradient background
for(let x = 0; x < 100; x+=1){
  fill(0);
  circle(x, height / 2, 40);
  fill(255);
  text(x, x, height/2);
  
  
}
let starCount = 0;
while(starcount < 100){
  fill (255,0,0);
  let x  = random(0,width)
  let y  = random(0,height)
  circle(x,y,10);
  starCount++;
}