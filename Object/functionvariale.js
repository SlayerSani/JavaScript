let user = "Sourin";
function greet(u){
    let num = 5;
    console.log(num)
    return `GetLost ${u}`
}

// let user = "Sourin";
let str = greet(user);
console.log(str);
// console.log(num);



function add (num1,num2,num3=1){
    console.log(num1,num2,num3);
    return num1 + num2 + num3;
}
let result = add(5,6)
console.log(result);