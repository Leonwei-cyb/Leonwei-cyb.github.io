// Perlin Noise
// Leon Wei
// November 4th 2024
//
// Extra for Experts:
// - Made Perlin Noise
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
  let highestX = 0;
  let totalHeight = 0;
  let count = 0;
  
  for(let x = 0; x <= width; x += rectWidth){
    noFill();
    let rectHeight = noise(xpan);
    
    rectHeight = map(rectHeight, 0, 1, 500, 100)
    
    //noFill();
    stroke(0);
    rect(x, height, rectWidth, -rectHeight);
    xpan += 0.01


    totalHeight += rectHeight;
    count++;
    
    
    if (rectHeight > highestpeak){
      highestpeak = rectHeight;
      highestX = x;
    }
  }
  
  let averageHeight = totalHeight / count;
    stroke(255,0,0);
    line(0, height - averageHeight, width,  height - averageHeight);
    
    drawFlag(highestX, height - highestpeak);
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
  stroke(0);
  line(x, y, x, y - 20);

  fill(250,0,0);
  noStroke();
  triangle(x, y - 20, x +10, y - 15, x, y -10);
}