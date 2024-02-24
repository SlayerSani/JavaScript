console.log(`S`);  //S
console.log(`O`);  //O
console.log(`U`);  //U
console.log(`R`);  //R
console.log(`I`);  //I
console.log(`N`);  //N

function sayMyName(){
    console.log(`S`);  
    console.log(`O`);  
    console.log(`U`);  
    console.log(`R`);  
    console.log(`I`);  
    console.log(`N`);  
}

sayMyName();
// S
// O
// U
// R
// I
// N

//Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.
//A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:
// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly braces, { /* … */ }.

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);

}
addTwoNumbers(); //NaN

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);

}
addTwoNumbers(3,4); //7

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);

}
addTwoNumbers(3,'4'); //34

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);

}
addTwoNumbers(3,'a'); //3a

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);

}
const result = addTwoNumbers(3,5); // 8
console.log(`Result: ${result}`);  // Result: undefined

// function addTwoNumbers(number1, number2){
//    let result = number1 + number2;
//    console.log('Sourin');       //Sourin
//    return result;
// }
// const result = addTwoNumbers(3,5); 
// console.log(`Result: ${result}`);  // Result: 8

// function addTwoNumbers(number1, number2){
//     return number1 + number2
//  }
//  const result = addTwoNumbers(3,5); 
// //  console.log(`Result: ${result}`);  // Result: 8


function loginUserMessage(username){
    if(username === undefined){
        console.log('Please enter a username');  //Please enter a username
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('Sourin')); //Sourin just logged in
console.log(loginUserMessage()); //undefined 

function loginUserMessage(username){
    if(!username){
        console.log('Please enter a username');  //Please enter a username
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('Sourin')); //Sourin just logged in
console.log(loginUserMessage()); //undefined 


function loginUserMessage(username = 'Sani'){
    if(!username){
        console.log('Please enter a username');  
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('Sourin')); //Sourin just logged in
console.log(loginUserMessage()); //Sani just logged in 