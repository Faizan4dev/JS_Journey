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
