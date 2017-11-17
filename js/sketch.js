// parse data from montoyamoraga.json

//store json file
var info = null;
//store keys from the json file
var keys = null;

//preload() runs first, once
function preload() {
  //load json file
  info = loadJSON("./montoyamoraga.json");
}

//setup() runs once, after preload()
function setup() {
  //create canvas
  createCanvas(windowWidth, windowHeight);

  //retrieve keys from json
  keys = Object.keys(info)

  //format the text to be on the center of the canvas
  textAlign(CENTER);

  //iterate through keys
  for (var i = 0; i < keys.length; i++) {
    //log key in console
    console.log(keys[i] + ": " + info[keys[i]]);
    //place pair key-value in canvas
    text(keys[i] + ": " + info[keys[i]], width/2, height*i/keys.length)
  }

}


//draw() runs in a loop, after setup()
function draw() {

}
