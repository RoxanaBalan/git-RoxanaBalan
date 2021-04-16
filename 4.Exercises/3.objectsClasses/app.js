//------------------------
//  Example 1
//------------------------

// person 1
const person1Name = 'Ionel';
const person1City = 'Bucuresti';
const person1Country = 'Romania';
const person1Age = 30;

// person 2
const person2Name = 'Ionel';
const person2City = 'Bucuresti';
const person2Country = 'Romania';
const person2Age = 30;

/////////////////////////////////////////////////////

function Person(name, city, country, age) {
    this.name = name;
    this.city = city;
    this.country = country;
    this.age = age;

    print = function() {
        console.log();
    }
}

class Person {

    constructor(name, city, country, age) {
        this.name = name;
        this.city = city;
        this.country = country;
        this.age = age;
    }

    print() {
        console.log();
    }
}

const person1 = new Person('Ionel', 'Bucuresti', 'Romania', 30);
const person2 = new Person('Ionel', 'Bucuresti', 'Romania', 30);
const person3 = new Person('Ionel', 'Bucuresti', 'Romania', 30);
const person4 = new Person('Ionel', 'Bucuresti', 'Romania', 30);



//------------------------
//  Example 2
//------------------------
const person = {
    name: 'Ionel',
    city: 'Bucuresti',
    country: 'Romania',
    age: 30,
    likesJavaScript: true,
    cars: ['bmw', 'mercedes'],

    address: {
        street: 'Pipera',
        number: 123
    }
}

console.log(person);
console.log(person.name); 
console.log(person['name']); 
console.log(person.address.street); 

const propName = 'name';
console.log(person[propName]);


//------------------------
//  Example 3
//------------------------
const person1 = {
    name: 'Sebi',
    age: 29
};

const person2 = {
    name: 'Traian',
    age: 40
};

const person3 = {
    name: 'Vasilica',
    age: 70
};

function suggestCar(person) {
    if (person.age < 30) {
        console.log('BMW x5');
    } else if (person.age < 60) {
        console.log('Lamborghini Urus');
    } else {
        console.log('Rolls Royce Cullinan');
    }
}

suggestCar(person1);
suggestCar(person2);
suggestCar(person3);


//------------------------
//  Example 4
//------------------------
const programmer = {
    name: 'Gheorghe',

    printProgrammingLanguage() {
        console.log('I like JavaScript');
    }
}

programmer.printProgrammingLanguage();

// VARIANTA 1 - in care folosim constructor function

function Car(name, color) {
    const obj = {};

    obj.name = name;
    obj.color = color;
    obj.printCar = function() {
        console.log(`Car name: ${this.name}, car color: ${this.color}`);
    }

    return obj;
}

const bmw = Car('BMW', 'black');
const mercedes = Car('Mercedes', 'red');
const vw = Car('VW', 'white');

bmw.printCar();
mercedes.printCar();
vw.printCar();

// Varianta 2 - in care folosim constructor function

function Car(name, color) {
    this.name = name;
    this.color = color;
    this.printCar = function() {
        console.log(`Car name: ${this.name}, car color: ${this.color}`);
    }
}

const bmw = new Car('BMW', 'black');

const mercedes = new Car('Mercedes', 'red');

const vw = new Car('VW', 'white');

bmw.printCar();
mercedes.printCar();
vw.printCar();

// Varianta 3 - de folosit cand avem un singur obiect

const bmw = {
    name: 'bmw',
    color: 'black',
    printCar() {
        console.log(`Car name: ${this.name}, color: ${this.color}`);
    }
};

// bmw.printCar();

const mercedes = {
    name: 'mercedes',
    color: 'red',
    printCar() {
        console.log(`Car name: ${this.name}, color: ${this.color}`);
    }
};

mercedes.printCar();

const vw = {
    name: 'vw',
    color: 'white',
    printCar() {
        console.log(`Car name: ${this.name}, color: ${this.color}`);
    }
};

vw.printCar();

const audi = new Object();

audi.color = 'WHite';
audi['power'] = 200;
audi.print = function() {
    console.log(`${this.color}, ${this.power}`);
}

audi.print();

const dacia = new Object({
    color: 'black',
    print: function() {
        console.log(`Hello Dacia ${this.color}`);
    }
});

dacia.print();

const newDacia = Object.create(dacia);
console.log(newDacia.color);
newDacia.print();


//------------------------
//  Example 5
//------------------------
function Car(name, color) {
    this.name = name;
    this.color = color;
    this.printCar = function() {
        console.log(`Car name: ${this.name}, car color: ${this.color}`);
    }
}

class Car {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    printCar() {
        console.log(`Car name: ${this.name}, car color: ${this.color}`);
    }
}

const bmw = new Car('BMW', 'black');
const mercedes = new Car('Mercedes', 'red');
const vw = new Car('VW', 'white');

bmw.printCar();
mercedes.printCar();
vw.printCar();