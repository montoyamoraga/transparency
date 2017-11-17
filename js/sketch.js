// parse data from montoyamoraga.json

//store json file
var info = null;
var keys = null;

//preload() runs first, once
function preload() {
  //load json file
  info = loadJSON("./montoyamoraga.json");
}

//setup() runs once, after preload()
function setup() {
  createCanvas(windowWidth, windowHeight);

  keys = Object.keys(info)

  for (var i = 0; i < keys.length; i++) {
    console.log(keys[i] + ": " + info[keys[i]]);
  }

}


//draw() runs in a loop, after setup()
function draw() {

}
