let form = document.querySelector("#myForm");
let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");

// form.addEventListener("submit", function (e) {
//   //   console.log("Form submitted");
//   alert("Form submitted");
// });

//Prevent Default
form.addEventListener("submit", function (e) {
  if (inp1.value === "") {
    e.preventDefault();
    console.log("Input required");
  } else if (inp2.value === "") {
    e.preventDefault();
    console.log("Pwsd required");
  }
});
