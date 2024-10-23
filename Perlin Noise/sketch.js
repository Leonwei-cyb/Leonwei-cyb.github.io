// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let rectWidth = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  staircase();
}


function staircase(){
  //use a for loop to draw a series of 
  //rectangles for use as terrain
  randomSeed(1); //only for random()
  
  for(let x = 0; x <= width; x += rectWidth){
    noFill();
    //generate a random height for each rect
    let rectHeight = noise(x/100);
    
    rectHeight = map(rectHeight, 0, 1, 500, 100)

    rect(x, height, rectWidth, -rectHeight);
  }
}

//
function keyPressed() {
  if (keyCode ===  RIGHT_ARROW) {
    rectWidth = min(rectWidth + 1, width);
  } else if (keyCode === LEFT_ARROW) {
    rectWidth = max(rectWidth - 1, 1);
  }
  return
}
function drawFlag(x,y) {
  
}