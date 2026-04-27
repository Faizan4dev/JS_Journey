let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");

inp1.addEventListener("change", function () {
  console.log(this.value);
});

inp2.addEventListener("input", function () {
  console.log(this.value);
});
