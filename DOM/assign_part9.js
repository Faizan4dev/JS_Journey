// Q1 : input box and labeled button
let inp = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click me!";

let body = document.querySelector("body");
body.append(inp);
body.append(btn);

// Q2 :  Add following attributes to the element :
// Change placeholder value of input to "username"
// Change the id of button to "btn'

inp.setAttribute("placeholder", "Username");
btn.setAttribute("id", "btn");

// Qs3. Access the btn using the querySelector and button id. Change the button background
// color to blue and text color to white.

let butn = document.querySelector("#btn");
butn.classList.add("btn_style");

//Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined.
// Change its color to purple.

let h1 = document.createElement("h1");
// h1.innerText = "DOM Practice";
// h1.style.textDecorationLine = "underline";  //or we can do
h1.innerHTML = "<u>DOM Practice</u>";
h1.style.color = "purple";
body.append(h1);

// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
// where Delta is bold.
let p = document.createElement("p");
p.innerHTML = "Apna <b>Delta</b> Practice";
body.append(p);
