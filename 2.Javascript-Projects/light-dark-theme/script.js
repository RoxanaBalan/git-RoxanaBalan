const switchTheme = () => {
    const themeSwitch = document.querySelector('#themeSwitch');
    themeSwitch.addEventListener('click', function() {
        changeBodyTheme("bg-dark");
        changeNavBarColor('navbar-dark', 'bg-dark');
        changeCardsColor(makeRandomColor());
        reorderCardsColumn();
        changeFooterColor();
        changeTitle("This is the rainbow theme!");
        changeButtonText('Active Light Theme');
    });
}


const changeButtonText = (btnText) => {
    let button = document.querySelector("#themeSwitch");
    button.textContent = btnText;
}


const changeTitle = (text) => {
    let title = document.querySelector("h1");
    title.classList.toggle('text-success');
    title.textContent = text;
}


const changeFooterColor = () => {
    let secondNav = document.querySelector("nav:nth-of-type(2)");
    secondNav.classList.add('text-light');
}


const reorderCardsColumn = () => {
    let cardsColumn = document.querySelectorAll(".col");
    for (let card of cardsColumn) {
        card.style.flexGrow = "0";
        card.style.flexBasis = "100%";
    }
}


const changeCardsColor = (callback) => {
    let cards = document.querySelectorAll(".card");
    for (let card of cards) {
        card.style.backgroundColor = callback;
    }
}


const changeNavBarColor = (property1, property2) => {
    let firstNav = document.querySelector('nav:nth-of-type(1)');
    firstNav.classList.add(property1, property2);

}


const changeBodyTheme = (theme) => {
    let body = document.querySelector("body");
    body.classList.toggle(theme);
}


const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}


const init = () => {
    switchTheme();
}


init()