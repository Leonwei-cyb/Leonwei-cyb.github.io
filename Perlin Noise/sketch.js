// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let rectWidth = 1;
let speed = 0.01;
let xStart = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  staircase();

  xStart += speed;
}


function staircase(){
  let xpan = xStart;
  let highestpeak = 0;
  let heightloc = 0;
  let averageheight = 0;
  //use a for loop to draw a series of 
  //rectangles for use as terrain
  //randomSeed(1); //only for random()
  
  for(let x = 0; x <= width; x += rectWidth){
    noFill();
    //generate a random height for each rect
    let rectHeight = noise(xpan);
    
    rectHeight = map(rectHeight, 0, 1, 500, 100)

    rect(x, height, rectWidth, -rectHeight);
    xpan += 0.01
    if (rectHeight > highestpeak){
      

    }
  }
  let averageheight = highestpeak/count;
    stroke()
    fill("red")
    rect(30, 20, 55, 40)
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
function drawFlag() {
  stroke()
  line(x, y, x, y, x, y)
  fill(0,0,0);
  noStroke();
  triangle(x, y, x, y, x, y);
}