let form = document.querySelector("#myForm");
let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //   alert(`Hi ${inp1.value} , Your password is ${inp2.value}`);
  console.log(`Hi ${inp1.value} , Your password is ${inp2.value}`);
});

//this data can be further used to store credentials in databases etc
// in case of large forms we can't access each element by querySelector one by one ,we've to use multiple ids too
// form has 'elements' attribute nd we can access form elements by using indexes in elements as:
form.addEventListener("submit", function (e) {
  let inp3 = this.elements[2];
  let inp4 = this.elements[3];

  alert(`City: ${inp3.value} , Country is ${inp4.value}`);
});
