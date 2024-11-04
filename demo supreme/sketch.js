// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let arclist = []
let stepAmount = 1;
let currentvalue = 0;

let largest = 0;
let scaleAmount = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  noFill();
}

function draw() {
  background(220);
  new arc.display
  translate(0);
  addToSequence();
  scaleAmount = lerp(scaleAmount, width/largetst,2, 0.05)
  scale(scaleAmount);
  renderArcs();

}

function addToSequence()[
  let backwards = currentvalue - stepAmount
  if(backwrads > 0 && addToSequence.includes(backwards))
    arclist.push(new rArc(currentValue, backwards, sequence. length % 2))
    sequence.push(backwards);
    currentValue = backwrads
]
  else
  {let forwards = currentValue + stepAmount;
    arclist.push(new rArc(currentValue, forwards, sequence))
  }
function renderArcs()
class rArc{
  constructor(start, end, dirction){
    this.start = start;
    this.end = end;
    this.direction = direction;
  }
  display(){
    let diameter = abs(this.start - this.end)
    let x = (this.start + this.end)/2 // centerpoint
    strokeWeight(0.5);
    if(this.direction ===0){
      arc(x, 0, diameter, diameter,0, PI );

    }
    else{
      arc(x)
    }
  }
}