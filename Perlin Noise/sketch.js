// Perlin Noise
// Leon Wei
// November 4th 2024
//
// Extra for Experts:
// - Made Perlin Noise
let rectWidth = 1; // set width for rectangles
let speed = 0.01; // speed of the terrain panning
let xStart = 0; // starting x value for terrain
// create canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
}
// draw loop for terrain
function draw() {
  background(255); // background color
  staircase();

  xStart += speed;
}


function staircase(){
  let highestpeak = 0; // variable to track highest peak
  let highestX = 0; // x coordinate of highest peak
  let totalHeight = 0; // total height of all rectangles
  let count = 0; // total count of rectangles
  // draw terrain
  for(let x = 0; x <= width; x += rectWidth){
    noFill();
    let rectHeight = noise(x/100); // generates a height
    
    rectHeight = map(rectHeight, 0, 1, 500, 100) // maps noise value
    
    stroke(0);
    rect(x, height, rectWidth, -rectHeight); // draw rectangle at height

    // add rectheight for total height
    totalHeight += rectHeight;
    count++;
    
    // checks highest peak
    if (rectHeight > highestpeak){
      highestpeak = rectHeight;
      highestX = x;
    }
  }
  // draws red line at average height
  let averageHeight = totalHeight / count;
    stroke(255,0,0);
    line(0, height - averageHeight, width,  height - averageHeight);
    // draws the flag at the highest location
    drawFlag(highestX, height - highestpeak);
}

// function to adjust rectangle width with arrows
function keyPressed() {
  if (keyCode ===  RIGHT_ARROW) { // increase rectangle width
    rectWidth = min(rectWidth + 1, width);
  } else if (keyCode === LEFT_ARROW) { // decrease rectangle width
    rectWidth = max(rectWidth - 1, 1);
  }
  return
}

// function to draw flag at x and y position
function drawFlag(x,y) {
  stroke(0);
  line(x, y, x, y - 20); // draws the pole

  fill(250,0,0);
  noStroke();
  triangle(x, y - 20, x +10, y - 15, x, y -10); // draws the flag triangle
}