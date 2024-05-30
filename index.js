// 1.Create a variable called carName, assign the value Volvo to it.
let carName = 'volvo';
console.log(carName);



//2 On one single line, declare three variables with the following names and values:
let firstName = "John";  // write variable name
let lastName = "Doe" //write variable values 
let age = 35 ; // write variable name and values both


// 3 Use the correct assignment operator that will result in x being 50 (same as x = x * y)
let x = 10;
let y = 5;
x = x * y  // what will be the value of x ? 
console.log(x);

// 4 Use comments to describe the correct data type of the following variables:

let length = 16; // data type Number?
let myName = "Johnson"; // data type String? 


const xx = {
  firstName: "John",  
  lastName: "Doe"
};    // data type object?

// 5Execute the function named myFunction.
 
 function myFunction() {
  console.log("Hello World!");
}
// call the function and see the output
myFunction();

// 6. Create an object called person with name = John, age = 50, Then,
const person = {
    name: 'johon',
    age: 50
};
console.log('john is 50')
//    access the object to alert("John is 50").

// 7 1. The <button> element should do something when someone clicks on it. Try to fix it!
function fun() {
        console.log('clicked the button')
    }


    // 8. Alert the number of items in an array, using the correct Array property: 

const cars = ["Volvo", "Jeep", "Mercedes"];
console.log(cars);


// 2. Change the first item of Brand to "Ford".

const Brand = ["Volvo", "Jeep", "Mercedes"]; 
Brand[0] = 'Ford';
console.log(Brand)



// 9
// 1. Use the correct Math method to create a random number.

// 2. Use the correct Math method to return the largest number of 10 and 20.

// 3. Use the correct Math method to get the square root of 9.
const method1 = Math.random();
console.log(method1);

const maxN = Math.max(11, 13, 15, 9);
console.log(maxN);

const square = Math.sqrt(9);
console.log(square);


// 10
// 1. Choose the correct comparison operator to alert true, when x is greater than y. 
let x1 = 20;
let y1 = 15;
if (x1 > y1) {
    
    console.log('x greater than y') // ? 
} else {
    console.log('ok')
}



// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
let num1 = 300;
let num2 = 200;
const number = num1 > num2 ? 'correct' : 'not correct';
console.log(number)






