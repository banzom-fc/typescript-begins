"use strict";
console.log(Math.floor(3.4));
var myNumber = 42;
console.log(myNumber);
var myString = "Hello, TypeScript!";
console.log(myString);
// Another Way
var myBoolean;
myBoolean = true;
console.log(myBoolean);
// Any type:
var myAny = "This can be anything";
console.log(myAny);
myAny = 100; // Now it's a number
console.log(myAny);
// Type Annotations with Objects
let personObject;
personObject = {
    name: "John Doe",
    age: 30,
    isEmployed: true,
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: 12345
    }
};
console.log(personObject);
// Type Annotations with Arrays
let numberArray = [1, 2, 3, 4, 5];
console.log(numberArray);
let stringArray = ["apple", "banana", "cherry"];
console.log(stringArray);
// Type Annotations with Functions
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("TypeScript User"));
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 10));
function logMessage(message) {
    console.log(`Log: ${message}`);
}
