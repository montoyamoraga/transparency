// parse data from montoyamoraga.json

//store json file
let info = null;
//store keys from the json file
let keys = null;
//store scar images
//TODO: automate
let scar0;
let scar1;
let scar2;
//store routinepanel images
//TODO: automate
let routinePanel0page0;
let routinePanel0page1;
let routinePanel0page2;

//preload() runs first, once
function preload() {
  //load json file
  info = loadJSON("./data/montoyamoraga.json");
  scar0 = loadImage("./media/scars/scar0.jpg");
  scar1 = loadImage("./media/scars/scar1.jpg");
  scar2 = loadImage("./media/scars/scar2.jpg");
  routinePanel0page0 = loadImage("./media/health-physical/routinepanel0-page0.jpg");
  routinePanel0page1 = loadImage("./media/health-physical/routinepanel0-page1.jpg");
  routinePanel0page2 = loadImage("./media/health-physical/routinepanel0-page2.jpg");
}

//setup() runs once, after preload()
function setup() {
  noCanvas();

  //retrieve keys from json
  keys = Object.keys(info)

  //retrieve menu
  let menu = document.getElementById("selectMenu");
  let text = document.getElementById("currentQuery");

  //iterate through keys
  for (let i = 0; i < keys.length; i++) {

    //populate the menu
    //create a new option
    let option = document.createElement("option");
    //make the text be the key
    option.text = keys[i];
    //add the option to the menu
    menu.add(option);
  }
}

// function triggered when an item is selected on the menu
function selectChange(selector) {
  //text(selector + ": " + info[selector], width/2, height/2)

  // reset index
  let index = null;

  // find the index for the selector
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] == selector) {
      console.log("selector: " + selector);
      index = i;
      break;
    }
  }

  // reset innerHTML of currentQuery
  currentQuery.innerHTML = "";

  // retrieve keys of the selector
  auxKeys = Object.keys(info[keys[index]])

  // append selector text to innerHTML of currentQuery
  for (let i = 0; i < auxKeys.length; i++) {
    // console.log(auxKeys[i]);
    currentQuery.innerHTML += auxKeys[i] + ": " + info[keys[index]][auxKeys[i]] + "<br />";
  }

  //special case for scars
  //TODO: automate
  if (keys[index] == "scars") {
    currentQuery.innerHTML += "scar_0: <br/>";
    currentQuery.innerHTML += "<img src='https://raw.githubusercontent.com/montoyamoraga/transparency/master/media/scars/scar0.jpg' width=50%>"
    currentQuery.innerHTML += "<br />"

    currentQuery.innerHTML += "scar_1: <br/>";
    currentQuery.innerHTML += "<img src='https://raw.githubusercontent.com/montoyamoraga/transparency/master/media/scars/scar1.jpg' width=50%>"
    currentQuery.innerHTML += "<br />"

    currentQuery.innerHTML += "scar_2: <br/>";
    currentQuery.innerHTML += "<img src='https://raw.githubusercontent.com/montoyamoraga/transparency/master/media/scars/scar2.jpg' width=50%>"
    currentQuery.innerHTML += "<br />"
  }
  //special case for health-physical
  //TODO: automate
  if (keys[index] == "health-physical") {
    currentQuery.innerHTML += "routinepanel0-page0: <br/>";
    currentQuery.innerHTML += "<img src='https://raw.githubusercontent.com/montoyamoraga/transparency/master/media/health-physical/routinepanel0-page0.jpg' width=50%>"
    currentQuery.innerHTML += "<br />"

    currentQuery.innerHTML += "routinepanel0-page1: <br/>";
    currentQuery.innerHTML += "<img src='https://raw.githubusercontent.com/montoyamoraga/transparency/master/media/health-physical/routinepanel0-page1.jpg' width=50%>"
    currentQuery.innerHTML += "<br />"

    currentQuery.innerHTML += "routinepanel0-page2: <br/>";
    currentQuery.innerHTML += "<img src='https://raw.githubusercontent.com/montoyamoraga/transparency/master/media/health-physical/routinepanel0-page2.jpg' width=50%>"
    currentQuery.innerHTML += "<br />"
  }

}

//draw() runs in a loop, after setup()
function draw() {

}
