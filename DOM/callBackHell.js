function savetoDB(data, success, failure) {
  randomval = Math.floor(Math.random() * 10) + 1;
  if (randomval > 5) {
    success();
  } else {
    failure();
  }
}

savetoDB(
  "mydata",
  () => {
    console.log("data saved successfully");
    savetoDB(
      "mydata2",
      () => {
        console.log("data2 saved successfully");
      },
      () => {
        console.log("data2 not saved");
      },
    );
  },
  () => {
    console.log("data not saved");
  },
);
