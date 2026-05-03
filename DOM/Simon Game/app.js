let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let colors = ["yellow", "green", "purple", "red"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (!started) {
    started = true;
    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let rand = Math.floor(Math.random() * colors.length);
  let ranColor = colors[rand];

  let ranBtn = document.querySelector(`#${ranColor}`);
  gameSeq.push(ranColor);
  console.log(gameSeq);
  gameFlash(ranBtn);
}

function gameFlash(btn) {
  btn.classList.add("gameFlash");
  setTimeout(function () {
    btn.classList.remove("gameFlash");
  }, 300);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 300);
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userSeq);

  let isCorrect = checkAns(); // Fix 1
  if (isCorrect && userSeq.length === gameSeq.length) {
    setTimeout(function () {
      levelUp();
    }, 1000);
  }
}

let btns = document.querySelectorAll(".btn");
for (let btn of btns) {
  btn.addEventListener("click", btnPress);
}

function btnPress() {
  let pressed = this;
  userFlash(pressed);
}

function checkAns() {
  let idx = userSeq.length - 1;
  if (gameSeq[idx] == userSeq[idx]) {
    console.log("Correct answer");
    return true;
  } else {
    console.log("Wrong answer");
    return false;
  }
}
