// INTRODUCTION

let person = [];

console.log(person);
console.log(person.length);
console.log(typeof person);
console.log(typeof person === "object");
console.log(typeof person === "array");

person.name = "Vasilica"

console.log(person.name);
console.log(typeof person.name.length);

person[0] = "string 1";
person[1] = "string 2";

console.log(person[0]);
console.log(person[1]);

person["name2"] = "Ionel";

console.log(person["name2"]);
console.log(person);
console.log(person.name2);


// name3 nu e o proprietate a obectului
let name3 = "name3val";
person[name3] = "Gheorghe";
console.log(person[name3]);
console.log(person["name3val"]);
console.log(person.name3);
console.log(person.name3val);

Array.isArray([1, 2, 3]);