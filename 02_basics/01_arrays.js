// array

// Array
// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

// Description
// In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

const myArr = [0,1,2,3,4,5]
const myHero = ["Shaktiman", "Nagraaj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0])  // 0


// Array Method

myArr.push(6)
console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]
myArr.push(7)
console.log(myArr); // [0, 1, 2, 3, 4, 5, 6, 7]
myArr.push(8)
console.log(myArr); // [0, 1, 2, 3, 4, 5, 6, 7, 8]
myArr.pop();
console.log(myArr); // [0, 1, 2, 3, 4, 5, 6, 7]

// push(): The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
// pop(): The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.


myArr.unshift(9)
console.log(myArr); // [9, 0, 1, 2, 3, 4, 5]

myArr.shift()
console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]

// shift(): The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
// unshift(element): The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.


console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(9));  // -1
console.log(myArr.indexOf(3));  // 3

// includes(element): The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// indexOf(element): The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.


const newArr = myArr.join()
console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]
console.log(typeof myArr); // object
console.log(newArr); //0,1,2,3,4,5
console.log(typeof newArr); // string

// join(): The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.


// slice, splice
console.log("A ", myArr); // A  [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1,3);
console.log(myn1); //[ 1, 2 ]
console.log("B ", myArr); //B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3);
console.log("C ", myArr); //C  [ 0, 4, 5 ]
console.log(myn2); //[ 1, 2, 3 ]
//slice(): The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
//splice(): The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
