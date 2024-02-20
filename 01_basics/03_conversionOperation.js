let score = 33;
console.log(typeof score);  //number
score = "33";
console.log(typeof score);  //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber);  //number

score = '33abc'
valueInNumber = Number(score);
console.log(typeof valueInNumber);  //number
console.log(valueInNumber); //NaN

score = null;
valueInNumber = Number(score);
console.log(typeof valueInNumber);  //number
console.log(valueInNumber);     //0

score = undefined;
valueInNumber = Number(score);
console.log(typeof valueInNumber);  //number
console.log(valueInNumber);   //NaN

score = true;
valueInNumber = Number(score);
console.log(typeof valueInNumber);  //number
console.log(valueInNumber);     //1

score = false;
valueInNumber = Number(score);
console.log(typeof valueInNumber);  //number
console.log(valueInNumber);     //0

score = 'Sourin';
valueInNumber = Number(score);
console.log(typeof valueInNumber);  //number
console.log(valueInNumber);     //NaN

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);  //boolean
console.log(booleanIsLoggedIn);         //true

isLoggedIn = '';
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);  // boolean
console.log(booleanIsLoggedIn)      //false

isLoggedIn = 'Sourin';
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);  // boolean
console.log(booleanIsLoggedIn)      //true


let sumNumber = 33
let stringNumber = String(sumNumber)
console.log(stringNumber);          //33
console.log(typeof stringNumber)    //string


/****************************************************************************************OPERATIONS*************************************************************************************************/

let value = 3;
let negValue = -value
console.log(negValue); // -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = 'hello';
let str2 = ' Sourin';
let str3 = str1 + str2
console.log(str3);      //hello Sourin

console.log('1'+2);     //12
console.log(1+'2');     //12
console.log('1'+'2');   //12
console.log('1'+2+2);   //122
console.log(1+2+'2');   //32

console.log((3+4)*5%3);   //2

console.log(true); //true
console.log(+true); //1
console.log(+"");   //0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2;
console.log(num1+num2+num3); //12


let gameCounter = 100;
gameCounter++;
console.log(gameCounter); //101

// let gameCounter = 100;
// ++gameCounter;
// console.log(gameCounter); //101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion