// parse data from montoyamoraga.json

//store json file
var info = null;

//preload() runs first, once
function preload() {
  //load json file
  info = loadJSON("./montoyamoraga.json");
}

//setup() runs once, after preload()
function setup() {
  createCanvas(windowWidth, windowHeight);
  //test if json file works
  console.log(info.birth-city);
}

//draw() runs in a loop, after setup()
function draw() {
  background(255, 0, 0);

}
