// 7. Build two function that returns promises. One will reject and the other will resolve. Capture and log all responses. 
// (Promise.allSettled())

Promise.allSettled([
  Promise.resolve('ceva1'),
  Promise.resolve('ceva2'),
  Promise.reject('error!')
])
  .then((data) => console.log(data))
  .catch((error) => console.error(error));