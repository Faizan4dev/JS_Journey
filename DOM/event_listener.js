let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  alert("Button pressed ");
  alert("Double alert ");
});

//there is a large number of eventlisteners , for eg double click
let btn2 = document.querySelector("#dbl");
btn2.addEventListener("dblclick", function () {
  alert("Button doubly clicked !");
});

//so like these we can add multiple event listeners .....
//Event listeners can be added for any type pf html elemen..for example
let p = document.querySelector("p");
p.addEventListener("click", function () {
  console.log("Paragraph clicked ! ");
});

let div = document.querySelector("div");
div.addEventListener("mouseenter", function () {
  console.log("Cursor entered inside box!");
});

// user defined function passing to event listener
function liked() {
  console.log("You liked the photo.");
}

btns = document.querySelectorAll(".userDefined");
for (indv of btns) {
  indv.addEventListener("click", liked);
}
