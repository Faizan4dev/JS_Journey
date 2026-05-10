h1 = document.querySelector("h1");

function colorChanger(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve(`${color} color was applied`);
    }, delay);
  });
}

colorChanger("Yellow", 1000)
  .then((result) => {
    console.log(result);
    return colorChanger("Green", 1000);
  })
  .then((result) => {
    console.log(result);
    return colorChanger("Blue", 1000);
  })
  .then((result) => {
    console.log(result);
    return colorChanger("Red", 1000);
  })
  .then((result) => {
    console.log(result);
    return colorChanger("Pink", 10000); //it's promise result remain pending for 9 seconds
    console.log(Promise);
  })
  .then((result) => {
    console.log(result);
    return colorChanger("Orange", 1000);
  });
//   .catch(()=>{
//     console.log("Check color name spelling ...!")  //it doesn't matter here , if wrong name then skip it
//   })
