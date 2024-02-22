const name = "Sourin";
const repoCount = 50;

console.log(name + repoCount + "value"); // Sourin50value
// below one is string interpoltion
console.log(`Hello my name is ${name} & my Repository count is ${repoCount}`);  // Hello my name is Sourin & my Repository count is 50

const gameName = new String('Sourin-kr-das')  // Sourin, Sourin-Sani, Sourin-kr-das

console.log(gameName[0])  // S
console.log(gameName.__proto__); // {}

console.log(gameName.length); //6

console.log(gameName.toLowerCase) // [Function: toLowerCase]
console.log(gameName.toUpperCase)  // [Function: toUpperCase]
console.log(gameName.charAt(5));  // n
console.log(gameName.indexOf('o')); // 1


const newString = gameName.substring(0,4)
console.log(newString); // Sour

// const anotherString = gameName.slice(0,3)
// console.log(anotherString);  // Sou

const anotherString = gameName.slice(-8,5)
console.log(anotherString);  // Souri


const newStringOne = "        Sourin        ";
console.log(newStringOne);//        Sourin        
console.log(newStringOne.trim());//Sourin


const url = "https://sourin.com/sourin%20das"
// url.replace('%20', '-');
console.log(url.replace('%20', '-'));   //   https://sourin.com/sourin-das

// url.includes('sourin')
console.log(url.includes('sourin'));  // true
console.log(url.includes('kumar'));     // false


console.log(gameName.split('-')); //[ 'Sourin', 'kr', 'das' ]