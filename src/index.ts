console.log(Math.floor(3.4))

var myNumber: number = 42;
console.log(myNumber);

var myString: string = "Hello, TypeScript!";
console.log(myString);

// Another Way
var myBoolean: boolean;

myBoolean = true;
console.log(myBoolean);


// Any type:
var myAny: any = "This can be anything";
console.log(myAny);
myAny = 100; // Now it's a number
console.log(myAny);


// Type Annotations with Objects
let personObject: {
    name: string;
    age: number;
    isEmployed: boolean;
    address: {
        street?: string; // Optional property
        city: string;
        zipCode: number;
    };
};

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
let numberArray: number[] = [1, 2, 3, 4, 5];
console.log(numberArray);

let stringArray: Array<string> = ["apple", "banana", "cherry"];
console.log(stringArray);

// Type Annotations with Functions
function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("TypeScript User"));

function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log(addNumbers(5, 10));
function logMessage(message: any): void {
    console.log(`Log: ${message}`);
}