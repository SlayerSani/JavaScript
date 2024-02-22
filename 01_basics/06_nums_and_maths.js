const score = 400;
console.log(score);  //400
console.log(typeof score);  // object

const balance = new Number(100)  
console.log(balance);  //[Number: 100]
console.log(typeof balance); //object

console.log(balance.toString()); //100
console.log(balance.toString().length);  //3
console.log(balance.toFixed(2)); //100.00


const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3));  // 23.9


const hundreds = 1000000
console.log(hundreds.toLocaleString()); //1,000,000
console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000



/************************************************MATHS*****************************************/

console.log(Math); //Object [Math] {}
console.log(Math.abs(-3)); //3
console.log(Math.round(7.49)) //7
console.log(Math.ceil(7.11))    //8
console.log(Math.floor(7.99999))   //7
console.log(Math.min(1,2,3,4,5,6,7,8,9,10)) //1
console.log(Math.max(1,2,3,4,5,6,7,8,9,10)) //10

console.log(Math.random()) // A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).

console.log(Math.random()*10)
console.log(Math.random()*10+1)
console.log((Math.random()*10)+1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1))+min);