let btn = document.querySelector("button");
let h3 = document.querySelector("h3");
let div = document.querySelector("div");

btn.addEventListener("click", function () {
  randomColor = getRandomColor();
  h3.innerText = randomColor;
  div.style.background = randomColor;
});

function getRandomColor() {
  let val1 = Math.floor(Math.random() * 255);
  let val2 = Math.floor(Math.random() * 255);
  let val3 = Math.floor(Math.random() * 255);

  let colors = `rgb(${val1},${val2},${val3})`;
  return colors;
}
