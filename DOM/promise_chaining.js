// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// }

// savetoDb("Data 1")
//   .then(() => {
//     console.log("Data 1 stored successfully !");
//     return savetoDb("Data 2 "); //Data 1 stored , now start saving data 2 and return function output in then() and attach that then for then-catch method
//   })
//   .then(() => {
//     console.log("Data 2 saved!");
//     return savetoDb("Date 3");
//   })
//   .then(() => {
//     console.log("Data 3 stored!");
//   })
//   .catch(() => {
//     console.log("Data was not saved !!"); //works if any of the step fails and stops execution of remainig thens
//   });

//////////////////////////
// use of result and error :
/////////////////////////

function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Data stored sucessfully");
    } else {
      reject("Network error!");
    }
  });
}

savetoDb("Data 1")
  .then((result) => {
    // console.log("Data 1 stored successfully !");  //no use of this now
    console.log("Promise result :", result);
    return savetoDb("Data 2 ");
  })
  .then((result) => {
    console.log("Promise 2 result:", result);
    return savetoDb("Date 3");
  })
  .catch((error) => {
    console.log("Promise result:", error);
  });
