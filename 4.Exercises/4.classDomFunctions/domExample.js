// Atasarea unei functii la evenimentul "click" -sau- in engleza "add a hook on click event"

function log(event) {
    console.log(event.target.innerHTML);
}

const test3 = document.getElementById("test");
test3.addEventListener('click', log);


// Selectarea tuturor elementelor "div" care sunt sub elementul "body" 
const elements = document.querySelectorAll('body div');

for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].innerHTML);
}