let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  this.style.backgroundColor = "green";
});

let inp = document.querySelector("input");
let h3 = document.querySelector("h3");
inp.addEventListener("input", function (e) {
  if (/^[a-zA-Z ]*$/.test(inp.value)) {
    h3.innerText = inp.value;
  } else {
    console.log("Wrong input");
  }
});
