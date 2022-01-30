const main = document.querySelector("main");

const captain = document.getElementById("slide-captain");
const iron = document.getElementById("slide-iron");
const hulk = document.getElementById("slide-hulk");
const thor = document.getElementById("slide-thor");
const widow = document.getElementById("slide-widow");
const spyder = document.getElementById("slide-spyder");
const panther = document.getElementById("slide-panther");
const ant = document.getElementById("slide-ant");

const captainContainer = document.querySelector(".captain-container");
const ironContainer = document.querySelector(".iron-container");
const hulkContainer = document.querySelector(".hulk-container");
const thorContainer = document.querySelector(".thor-container");
const widowContainer = document.querySelector(".widow-container");
const spyderContainer = document.querySelector(".spyder-container");
const pantherContainer = document.querySelector(".panther-container");
const antContainer = document.querySelector(".ant-container");

function onCaptain() {
  main.classList.add("hidden");
  captainContainer.classList.remove("hidden");
}

function onIron() {
  main.classList.add("hidden");
  ironContainer.classList.remove("hidden");
}

function onHulk() {
  main.classList.add("hidden");
  hulkContainer.classList.remove("hidden");
}

function onThor() {
  main.classList.add("hidden");
  thorContainer.classList.remove("hidden");
}

function onWidow() {
  main.classList.add("hidden");
  widowContainer.classList.remove("hidden");
}

function onSpyder() {
  main.classList.add("hidden");
  spyderContainer.classList.remove("hidden");
}

function onPanther() {
  main.classList.add("hidden");
  pantherContainer.classList.remove("hidden");
}

function onAnt() {
  main.classList.add("hidden");
  antContainer.classList.remove("hidden");
}

captain.addEventListener("click", onCaptain);
iron.addEventListener("click", onIron);
hulk.addEventListener("click", onHulk);
thor.addEventListener("click", onThor);
widow.addEventListener("click", onWidow);
spyder.addEventListener("click", onSpyder);
panther.addEventListener("click", onPanther);
ant.addEventListener("click", onAnt);
