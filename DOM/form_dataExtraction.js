let form = document.querySelector("#myForm");
let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  alert(`Hi ${inp1.value} , Your password is ${inp2.value}`);
});

//this data can be further used to store credentials in databases etc
