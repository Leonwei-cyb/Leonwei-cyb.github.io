// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

letcurrentColro = 0;
letColor;



function setup() {
  createCanvas(windowWidth, windowHeight);
  myColor = (200,120,210);
}

function draw() {
  background(myColor);
  switch(currentColro){
    case 0:
      fill(255,0,0);  break;
    case 1:
      fill(myColro);  break;
    case 2:
      fill(0, 50, 210); break;

  }
  circle(width/2. height/2,circleSize);
  if(frameCount % 10 === 0){
    currentColro += 1;
    if(currentColor > 2) currentColor = 0'
  } 

    if(growing) circleSize += 2;
    else circleSize -= 2;

    cirlce(width/2, height/2, circleSize);
}

function keyPressed(){
  if(key === 'a'){
    growing = !growing;
  }
}
