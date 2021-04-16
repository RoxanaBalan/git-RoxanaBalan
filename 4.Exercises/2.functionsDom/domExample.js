// ======================================
// DOM 
// ======================================
function greet(greeting) {
    const name = document.getElementById('textbox').value;

    if (name !== '') {
        document.getElementById('content').innerText = greeting + ' ' + name.charAt(0).toUpperCase() + name.slice(1);
    } else {
        document.getElementById('content').innerText = "Please insert your name."
    }
}


const buttonGreetInEnglish = document.getElementById('greet-in-english');
buttonGreetInEnglish.addEventListener('click', function() {
    // console.log("Hello");
    greet('Hello');
});

const buttonGreetInRomanian = document.getElementById('greet-in-romanian');
buttonGreetInRomanian.addEventListener('click', function() {
    // console.log("Hello");
    greet('Salut');
});