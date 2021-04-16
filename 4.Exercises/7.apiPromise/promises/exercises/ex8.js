// 8. Build a function that rejects with an error. Log a custom message after the promise rejects, without catching the error. 
// (Promise.finally())

let x = 0;

function fail() {
  x = 1;
  return new Promise((resolve, reject) => reject('eroare!'));
}

fail()
  .finally(() => {
    x = 0;
    console.log('finally!');
  });
  