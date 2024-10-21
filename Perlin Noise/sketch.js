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

// Checks if space button is pressed to change sun
function keyPressed(key) {
  if (key ===  RIGHT_ARROW) {
    print()
    rectWidth += 1
  } else if (key === LEFT_ARROW ) {
    rectWidth -= 1
  }
}
