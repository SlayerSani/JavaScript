const marvel_heros = ["IronMan","Thor","SpiderMan"]
const dc_heros = ["SuperMan","Flash","BatMan"] 

marvel_heros.push(dc_heros)
console.log(marvel_heros); //[ 'IronMan', 'Thor', 'SpiderMan', [ 'SuperMan', 'Flash', 'BatMan' ] ]

console.log(marvel_heros[3][1]) // Flash

let heros = marvel_heros.concat(dc_heros)
console.log(heros); // [ 'IronMan', 'Thor', 'SpiderMan', 'SuperMan', 'Flash', 'BatMan' ]
//concat() : The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.


const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); //[ 'IronMan', 'Thor', 'SpiderMan', 'SuperMan', 'Flash', 'BatMan' ]
// The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]
// The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

//flat(infinity) is essentially flattening the array to its maximum depth, ensuring all nested arrays are flattened. However, flat(infinity) is not a common or standard way of expressing this in JavaScript. Typically, you would just use flat() without passing any arguments.

console.log(Array.isArray("Sourin")) // false
console.log(Array.from("Sourin")) //[ 'S', 'o', 'u', 'r', 'i', 'n' ]

//The Array.isArray() static method determines whether the passed value is an Array.
//Array.from() is a static method in JavaScript that creates a new, shallow-copied Array instance from an array-like or iterable object. 

console.log(Array.from({name:"Sourin"})); //[]  ---> interseting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]
// Array.of() is a static method in JavaScript introduced in ECMAScript 6 (ES6/ES2015) for creating a new Array instance with a variable number of arguments, regardless of the number or type of the arguments.