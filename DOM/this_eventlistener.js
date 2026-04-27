let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log(this);
});

function changeColor() {
  console.dir(this.innerText);
  this.style.backgroundColor = "blue";
}

let p = document.querySelector("p");
let h3 = document.querySelector("h3");
let div = document.querySelector("div");

p.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
// add and remove effect
div.addEventListener("mouseenter", changeColor);
div.addEventListener("mouseleave", function () {
  this.style.backgroundColor = "blueviolet";
});
