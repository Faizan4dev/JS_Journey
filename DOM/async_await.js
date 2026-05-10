h1 = document.querySelector("h1");

///////////////////////////////
//Async wairt simple code
///////////////////////////////

// async function colorChanger(color, delay) {
//   return new Promise((resolve, error) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve();
//     }, delay);
//   });
// }

// async function changer() {
//   await colorChanger("Yellow", 1000);
//   await colorChanger("Green", 1000);
//   await colorChanger("Red", 1000);
//   await colorChanger("Blue", 1000);
//   await colorChanger("Purple", 1000);
// }

// changer();

///////////////////////////////
//Async wairt with rejection handling
///////////////////////////////

async function colorChanger(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let colorFreq = Math.floor(Math.random() * 10) + 1;
      if (colorFreq < 4) {
        reject("Bad Frequency");
      }
      h1.style.color = color;
      resolve();
    }, delay);
  });
}

async function changer() {
  try {
    await colorChanger("Yellow", 1000);
    await colorChanger("Green", 1000);
    await colorChanger("Red", 1000);
    await colorChanger("Blue", 1000);
    await colorChanger("Purple", 1000);
  } catch (error) {
    console.log("Error found : ", error);
  } finally {
    console.log("Execution completed !");
  }
}

changer();
