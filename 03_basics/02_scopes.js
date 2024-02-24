// Scope
// The scope is the current context of execution in which values and expressions are "visible" or can be referenced. If a variable or expression is not in the current scope, it will not be available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

// JavaScript has the following kinds of scopes:

// Global scope: The default scope for all code running in script mode.
// Module scope: The scope for code running in module mode.
// Function scope: The scope created with a function.
// In addition, variables declared with let or const can belong to an additional scope:

// Block scope: The scope created with a pair of curly braces (a block).
// Blocks only scope let and const declarations, but not var declarations.

// let a = 10
// const b = 20
// var c = 30


// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30


// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }
// // console.log(a); // 10
// // console.log(b); // 20
// console.log(c); // 30

// var c = 300
// if(true){
//     let a = 10
//     const b = 20
//     // var c = 30
// }
// console.log(c); // 30

// let a = 300
// if(true){
//     let a = 10
//     const b = 20
//     console.log(`Inner: ${a}`);  //Inner: 10
// }
// console.log(a); // 300


let a = 300
if(true){
    let a = 10
    const b = 20
    console.log(`Inner: ${a}`);  //Inner: 10
    // function addnum(){
        
    // }
}
console.log(a); // 300


function one(){
    const username = "Sourin"
    function two(){
        const website = 'youtube'
        console.log(username);
    }
    // console.log(website);  // error
    two();  //Sourin
}
one();

if(true){
    const username = 'Sourin'
    if(username === 'Sourin'){
        const website = ' YouTube'
        console.log(username + website);
    }
    // console.log(website);        //error
}
// console.log(username)            //error

if(true){
    const username = 'Sourin'
    if(username === 'Sourin'){
        const website = ' YouTube'
        console.log(username + website);        //Sourin YouTube
    }
}


/***************************************************INTRESTING********************************************/
console.log(addone(1)); // 2
function addone(num){
    return num + 1
}

// console.log(addTwo(2))  //error
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(2)) // 4