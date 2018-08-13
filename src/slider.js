const slider = document.querySelector(".slider");
const colorLeft = "white";
const colorRight = "#ed5e74";
slider.addEventListener("input", function () {
  slider.style = `background: linear-gradient(to right, ${colorLeft} 0%, ${colorLeft} ${this.value}%, ${colorRight} ${this.value}%, ${colorRight} 100%);`;
});