// let nums = [5,7,2,4];
// console.log(nums);
// let [a,b,c,d] = nums;
// let [a,b,,d] = nums;

// console.log(d);


// let a = 5;
// let b =6;

// [a,b] = [b,a]
// console.log(a,b);


let words = 'My Name is Sourin Das works for LTIM as SDE'.split(' ');
// let [a,b,c,d,e,f] = words;
let [a,b,,...d] = words;
console.log(d);