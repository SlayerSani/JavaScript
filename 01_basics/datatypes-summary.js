// JavaScript is dynamically typed, not statically typed.
// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.table([id, anotherId]);
// ┌─────────┬─────────────┐
// │ (index) │   Values    │
// ├─────────┼─────────────┤
// │    0    │ Symbol(123) │
// │    1    │ Symbol(123) │
// └─────────┴─────────────┘

console.log(id === anotherId); //false


const bigNumber = 333333333333333333333333333333n;
console.log(bigNumber); //333333333333333333333333333333n


// Reference (Non Primitive)

// Arrays, Objects, Functions


const heros = ['Shaktiman', 'Nagraj', 'Doga'];
let myObj = {
    name: 'Sourin',
    age: 24,
}

const myFunction = function(){
    console.log("Hello MotherFuckers");
}

console.log(typeof bigNumber);  //bigint
console.log(typeof outsideTemp); //object
console.log(typeof scoreValue);  // number
console.log(typeof myFunction);  //function


// https://262.ecma-international.org/5.1/#sec-11.4.3

/*************************************************************************************/

// stack(Primitive), Heap(Non-Primitive)

let myYouTubename = "Sourinsanidotcom";
let anothername = myYouTubename;
anothername = "chaiaurcode"
console.log(myYouTubename);  // Sourinsanidotcom
console.log(anothername); // chaiaurcode

let userOne = {
    email: 'user@google.com',
    upi: 'user@ybl'
}

let userTwo = userOne

userTwo.email = 'sourin@google.com'
console.log(userOne.email); // sourin@google.com
console.log(userTwo.email); // sourin@google.com