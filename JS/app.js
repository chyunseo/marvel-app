const home = document.querySelector("#home");
const Home = document.querySelector("#Home");

function onHome() {
  window.open("https://www.google.com/");
}

home.addEventListener("click", onHome);
Home.addEventListener("click", onHome);
