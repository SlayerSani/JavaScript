// let nums = [42,51,24,98,65,12];

// nums.filter(n=> n%2===0)    
//     .forEach(n=>{
//     console.log(n*2);
// });

// nums.filter(n=> n%2===0)
//     .map(n => n*2)    
//     .forEach(n=>{
//     console.log(n);
// });

//reduce
let nums = [1,2,3,4,3,5,6];

let result = nums.filter(n=> n%2===0)
    .map(n => n*2)    
    .reduce((a,b) => a+b);


    console.log(result);