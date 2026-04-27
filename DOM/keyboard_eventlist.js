let inp = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", function (e) {
  console.log(e);
});

inp.addEventListener("keydown", function (e) {
  console.dir(e);
  console.dir(e.key); //gives key which will be shown on screen
  console.dir(e.code); //gives backend code of that keyu
});

let input = document.querySelector("#mov");
input.addEventListener("keydown", movement);

function movement(e) {
  if (e.key === "d") {
    console.log("Moved Down");
  } else if (e.key === "u") {
    console.log("Moved Up");
  } else if (e.key === "l") {
    console.log("Moved Left");
  } else if (e.key === "r") {
    console.log("Moved Right");
  }
}
