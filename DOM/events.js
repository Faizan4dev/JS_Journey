let btn = document.querySelector("#myBtn");
console.dir(btn); //to show its props

btn.onclick = function () {
  console.log("Separate file event trigger button pressed !");
  alert("Button 2 pressed!");
};

// Multiple buttons but same output needed
btns = document.querySelectorAll(".liked");
function likedPic() {
  alert("Photo liked !");
}

for (btn of btns) {
  btn.onclick = likedPic;
}

// On mouse enter
mous = document.querySelector("#redZone");
mous.onmouseenter = function () {
  alert("You entered Red zone ! ");
};
