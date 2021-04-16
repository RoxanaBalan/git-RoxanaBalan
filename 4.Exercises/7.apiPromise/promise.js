function getSum(a, b) {
    return a + b;
}

function getSumAfter2Seconds() {
    return new Promis(resolve => {
        setTimeout(() => {
            let sum = getSum(2, 3);
            resolve(sum);
        })
    }, 2000);
}

async function asyncCall() { 
    const result = await getSumAfter2Seconds; 
    console.log(result);
}

asyncCall();
console.log("test"); 


setTimeout(() => {
    console.log("test2");
    console.log("test3");
}, 3000);