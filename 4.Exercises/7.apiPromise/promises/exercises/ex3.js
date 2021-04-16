// 3. Build a function that returns a promise after 5 seconds. 
//    The promise must containing an array of numbers. 
//    Log the the numbers.

function getNumbers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([1,2,3]), 5000);
  });
}


getNumbers() 
  .then((array) => console.log(array));


console.log('test4');
console.log('test5');
console.log('test6');



