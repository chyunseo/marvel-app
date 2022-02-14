const home = document.querySelector("#home");
const Home = document.querySelector("#Home");
const movieList = document.querySelector("#movieList");
const characters = document.querySelector("#characters");
const recommand = document.querySelector("#recommand");
const games = document.querySelector("#games");

function onHomes() {
  window.open("https://www.google.com/");
}

function onMovieList() {}
function onCharacters() {}
function onRecommand() {}
function onGames() {}

home.addEventListener("click", onHomes);
Home.addEventListener("click", onHomes);
movieList.addEventListener("click", onMovieList);
characters.addEventListener("click", onCharacters);
recommand.addEventListener("click", onRecommand);
games.addEventListener("click", onGames);
