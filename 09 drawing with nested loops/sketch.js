// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSpacing = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  renderGrid();
  for(let x = 0; x < width; x+=40){
    circle(x, 0, 20);
    line(x,0,mouseX,mouseY);
  }
  
}

//function circleDistance(x1, x2, y1, y2) {
  //let a = abs(x1 - x2);
 // let b = abs(y1 - y2);
 // let c = sqrt(pow(a, 2) + pow(b, 2));
 // return round(c);
//}

function renderGrid() {
  for (let x = 0; x < width; x += gridSpacing) {
    for (let y = 0; y < height; y += gridSpacing) {
      let d = circleDistance(x, mouseX, y, mouseY);
      
      if (d > 150) {
        fill(0);
      } else {
        fill(200, 50, 120);
      }

      noStroke(); // Optional: Remove the stroke for the circles
      circle(x, y, gridSpacing);

      textSize(gridSpacing / 3); // Adjusted text size for clarity
      textAlign(CENTER, CENTER);
      fill(0); // Ensure text is visible
      text(d, x, y);
    }
  }
}
