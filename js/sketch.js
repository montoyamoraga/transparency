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
  //createCanvas(windowWidth, windowHeight);
  noCanvas();

  //retrieve keys from json
  keys = Object.keys(info)

  //retrieve menu
  var menu = document.getElementById("selectMenu");
  var text = document.getElementById("currentQuery");

  //iterate through keys
  for (var i = 0; i < keys.length; i++) {
    //log key in console
    //console.log(keys[i] + ": " + info[keys[i]]);

    //place pair key-value in canvas
    //text(keys[i] + ": " + info[keys[i]], width/2, 0.9*height*(i+1)/keys.length)

    //populate the menu
    //create a new option
    var option = document.createElement("option");
    //make the text be the key
    option.text = keys[i];
    //add the option to the menu
    menu.add(option);
  }
}

// function triggered when an item is selected on the menu
function selectChange(selector) {
  //text(selector + ": " + info[selector], width/2, height/2)
  currentQuery.innerHTML = info[selector];
  console.log("selector: " + selector);
}

//draw() runs in a loop, after setup()
function draw() {

}
