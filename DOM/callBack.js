//CallBacks : as JS is single threaded language, it can not do multiple things at a time. So when we have
// to do some task which takes time, we can not wait for that task to complete and then do other work.
//  So we use call backs to do that work. Call backs are functions which are passed as arguments to other
//  functions and are called when the task is completed.

//JS works default but browser help it act asynchronous. So when we have to do some task which takes time,
//  we can not wait for that task to complete and then do other work.

//Example :
function doSomething() {
  console.log("Waiting...");
  setTimeout(function () {
    console.log("Waited and Printed!");
  }, 2000);
}

console.log("Execution Started");
doSomething();
