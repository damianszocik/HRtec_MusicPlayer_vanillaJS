import "./slider";
import * as songs from "./songs";
import "./scrollbar";

//play-pause button toggle
const playPauseButton = document.querySelector(".play-pause-button__button");
playPauseButton.addEventListener("click", function() {
  this.classList.toggle("play-pause-button__button--active");
});

//playlist view toggle
const playlist = document.querySelector(".playlist");
const hamburger = document.querySelector("#hamburger");
const backButton = document.querySelector("#back-button");
const playlistToggle = () => {
  playlist.classList.toggle("playlist--active")
};
hamburger.addEventListener("click", (event) => {
  event.preventDefault();
  playlistToggle();
});
backButton.addEventListener("click", (event) => {
  event.preventDefault();
  playlistToggle();
});







