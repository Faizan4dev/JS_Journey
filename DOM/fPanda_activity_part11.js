const order = {
  item: "Burgers",
  price: 500,
  orderId: 1,
};

function orderPayment(payment) {
  return new Promise((resolve, reject) => {
    if (payment == order.price) {
      resolve(`Payment of $${payment} has been done!`);
    } else {
      reject("Payment not done!");
    }
  });
}

function rider(orderId) {
  return new Promise((resolve, reject) => {
    resolve(`Rider is on his way to pick order #${orderId}`);
  });
}

orderPayment(500)
  .then((result) => {
    console.log(result);
    return rider(order.orderId);
  })
  .then((result) => {
    console.log(result);
  })
  //   .then((resolve){

  //   })
  .catch((error) => {
    console.log(error);
  });
