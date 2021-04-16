class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    print() {
        return `First name: ${this.firstName} Last name: ${this.lastName} Age: ${this.age}`;
    }
}

const persons = [];

function savePersonData(data) {
    persons.push(data);
}

function setDOMDataValue(id, value) {
    document.getElementById(id).value = value;
}

function getDOMDataValue(id) {
    return document.getElementById(id).value;
}

function clearPersonData() {
    setDOMDataValue('first-name', '');
    setDOMDataValue('last-name', '');
    setDOMDataValue('age', '');
}

function readPersonData() {
    const firstName = getDOMDataValue('first-name');
    const lastName = getDOMDataValue('last-name');
    const age = Number(getDOMDataValue('age'));

    clearPersonData();

    return new Person(firstName, lastName, age);
}

function sortPersonsByAge(arrayToSort) {
    for (let i = 0; i < arrayToSort.length; i++) {
        for (let j = 0; j < arrayToSort.length - 1; j++) {
            if (arrayToSort[j].age > arrayToSort[j + 1].age) {
                let aux = arrayToSort[j];
                arrayToSort[j] = arrayToSort[j + 1];
                arrayToSort[j + 1] = aux;
            }
        }
    }
}

const addPersonButton = document.getElementById('add-person-button');
addPersonButton.addEventListener('click', function() {
    savePersonData(readPersonData());
});

const sortPersonButton = document.getElementById('sort-person-button');
sortPersonButton.addEventListener('click', function() {
    sortPersonsByAge(persons);
    const container = document.getElementById('container');

    container.innerHTML = '';

    persons.forEach(function(person) {
        const element = document.createElement('div');
        element.innerText = person.print();
        container.appendChild(element);
    });
});