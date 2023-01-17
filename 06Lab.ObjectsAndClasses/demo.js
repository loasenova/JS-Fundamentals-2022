let person = {

    name: "Peter",
    age: 28

};

console.log(person.name);
console.log(person["age"]);

let propName = "age";

console.log(person[propName]); 
console.log(person);

person.lastName = "Johnson";

console.log(person);
