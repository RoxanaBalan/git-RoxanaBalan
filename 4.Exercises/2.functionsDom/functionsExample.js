//------------------------
//  1. Exercise 1
//------------------------

function timeRemaining(time1, time2) {
    return time1 - time2;
}

let leftTime = timeRemaining(100, 50);


console.log(`Left time: ${leftTime}`);
console.log(`Left time: ${timeRemaining(200, 100)}`);


//------------------------
//  2. Exercise 2
//------------------------

function addTwo(number) {
    return number + 2;
}

const finalAnswer = addTwo;
console.log(`Final answer: ${finalAnswer(10)}`);


//------------------------
//  3. Arrow functions
//------------------------
// a. NORMAL FUNCTION

function test1(a) {
    return a + 100;
}

console.log(`test1: `, test1(100));


// b. ARROW FUNCTION

let test2 = a => a + 100;

console.log(`test2: `, test2(200));


// c. 

let test3 = (a, b) => {
    return a + b + 100;
}
console.log(`test3: `, test3(300, 400));


//------------------------
//  4. Immediately Invoked Function Expressions (IIFE)
//------------------------

(function test() {
    console.log("test---");
})();