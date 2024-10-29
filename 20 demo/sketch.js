// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let grid = [[0,255,200,50,100],
            [255,50,150,250,0],
            [0,0,150,200,50]];

const NUM_ROWS = 3;
const NUM_COLS = 5;
let rectWidth, rectHeight

function renderGrid(){
  for(let x = 0; x < NUM_COLS; x++){
    for(let y = 0; y < NUM_ROWS; y++){
      fill(grid[y][x]);
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = 500/NUM_COLS;
  rectHeight = 300/NUM_ROWS;
}

function draw() {
  background(220);
  if(frameCount%30 === 0){
    
  }
}
