//Fires when mouse leaves an element

let div = document.querySelector("div");

div.addEventListener("mouseout", function () {
  console.log("Mouse left the div");
});

//Fires when a key is pressed (but limited) , Avoid keypress in modern JS
// keydown
// keyup
let btn = document.querySelector("button");
btn.addEventListener("keypress", function (e) {
  console.log(e.key);
});

//Fires when user scrolls the page , scroll fires MANY times → can affect performance
window.addEventListener("scroll", function () {
  console.log("Scrolling...");
});

console.log(window.scrollY);

//Fires when page (or resource) fully loads
window.addEventListener("load", function () {
  console.log("Page fully loaded");
});
