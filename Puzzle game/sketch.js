// Puzzle Game
// Leon Wei
// November 27th 2024
//
// Extra for Experts:
// - Made Puzzle Game

let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,255,0,0,0],
                [255,255,255,0,0]];


let FlipMode = "cross"; //set flip mode
function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS; 
  randomize(); // randomize grid
}

function draw() {
  background(220);
  determineActiveSquare();   //figure out which tile the mouse cursor is over
  drawGrid();                //render the current game board to the screen (and the overlay)
  if (checkWinCon()) { // check if game is won
    fill(120); // text color
    textSize(60); // text size
    textAlign(CENTER, CENTER); 
    text("YOU WIN", width/2, height/2); // text display
  }
}




function mousePressed(){
  // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
  if (keyIsDown(SHIFT)){ // cheater cheater flips one square
    flip(currentCol, currentRow);
  } 
  else{
    if(FlipMode === "cross"){ // flips cross
      flip(currentCol, currentRow);
      flip(currentCol - 1, currentRow);
      flip(currentCol + 1, currentRow);
      flip(currentCol, currentRow - 1);
      flip(currentCol, currentRow + 1);
    } 
    else if(FlipMode === "square"){ // flips square
      flip(currentCol, currentRow);
      flip(currentCol + 1, currentRow);
      flip(currentCol, currentRow + 1);
      flip(currentCol + 1, currentRow + 1);
    }
  }
}


function flip(col, row){
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS ){
    if (row >= 0 && row < NUM_ROWS){
      if (gridData[row][col] === 0) gridData[row][col] = 255;
      else gridData[row][col] = 0;
    }
  }
}

function determineActiveSquare(){
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight); // determine row
  currentCol = int(mouseX / rectWidth); // determine column
}

function drawGrid(){
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      fill(gridData[y][x]); // sets fill color by gridata
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);// draws rectangle
      
      if (Overlay(x,y)) { // shows which squares will be flipped
        fill(215, 240, 189); // sets overlay color
        rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight); // draws overlay

      }
    }
  }
}


function checkWinCon() { // check if grid has same color
  let firstValue = gridData [0][0];
  for (let row of gridData) {
    for (let value of row) {
      if (value !== firstValue) return false; // checks if any color is different and returns false
    }
  }
  return true; // check if all colors the same and returns true
}
function randomize() { // randomizes the starting grid

  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      gridData[row][col] = random([0, 255]);
    }
  }
}
function Overlay(x,y) { 
  if (keyIsDown(SHIFT)) { // shows overlay on current square
    if (x === currentCol && y === currentRow) {
      return true;
    }
  } else if (FlipMode === "cross"){ // shows overlay for cross pattern

    if (x === currentCol && y === currentRow) {
      return true;
    }
    if (x === currentCol - 1 && y === currentRow) {
      return true;
    }
    if (x === currentCol + 1 && y === currentRow) {
      return true;
    }
    if (x === currentCol && y === currentRow - 1) {
      return true;
    }
    if (x === currentCol && y === currentRow + 1) {
      return true;
    }
  } else if (FlipMode === "square") { // shows overlay for square pattern
    if (x === currentCol && y === currentRow) {
      return true;
    }
    if (x === currentCol + 1 && y === currentRow) {
      return true;
    }
    if (x === currentCol && y === currentRow + 1) {
      return true;
    }
    if (x === currentCol + 1 && y === currentRow + 1) {
      return true;

    }
  }  
  return false;
}

function keyPressed() {
  // key press to flip modes
  if (key === ' ') {
    FlipMode = (FlipMode === "cross") ? "square" : "cross";
  }
  
}