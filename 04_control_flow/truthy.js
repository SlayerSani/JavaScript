// const userEmail = "s@sani.com"  // got user email

// const userEmail = "" //dont have user email
const userEmail = []  // got user email



if (userEmail){
    console.log('got user email');
}
else{
    console.log('dont have user email');
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0){
    console.log('Array is empty');
} else{
    console.log('Array is not empty');
}
//Array is empty

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");     //Object is empty
}

// Nullish Coalescing Operator (??): null undefined
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 11 ?? 22
console.log(val1);  //5, 10, 15, 11

// Terniary Operator
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log('less than 80'): console.log('More than 80')  // More than 80