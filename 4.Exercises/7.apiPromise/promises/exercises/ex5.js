// 5. Build three function that returns promises. 
//    One of the functions must reject. Display the first promise that completes successfully. 
//    (Promise.any())

function success() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('test'), 4000);
  })
}

function reject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('error'), 1000);
  })
}

Promise.any([reject(), success()])
  .then((data) => console.log(data));