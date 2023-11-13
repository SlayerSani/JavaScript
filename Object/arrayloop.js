let nums = [];
nums[0] = 5;
nums[99] = 9;
// console.log(nums);
// console.log(nums.length);


// for of loop
// for(let n of nums){
//     console.log(n);
// }

//for in loop
for(let key in nums){
    console.log(nums[key]);
}