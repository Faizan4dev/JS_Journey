// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("Success : Data saved !");
//     } else {
//       reject("Failure : Data wasn't saved !");
//     }
//   });
// }

// savetoDb("Data 1 ");  //this will work if used in console

function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve();
    } else {
      reject();
    }
  });
}

savetoDb("Data 2")
  .then(() => {
    console.log("Data stored successfully !");
  })
  .catch(() => {
    console.log("Data was not saved !!");
  });
