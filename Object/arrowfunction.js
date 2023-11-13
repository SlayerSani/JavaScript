let greet = function(){
    console.log("Hello World");
    return 1;
}
 console.log(greet());

let greet1 = () => {
    console.log(`Hello World`);
    return 1
}
console.log(greet1());

greet = function(user){
    console.log(`Hello ${user}`);
    return 1;
}
 console.log(greet(`Sourin`));

 greet = (user) =>{
    console.log(`Hello ${user}`);
    return 1;
}
 console.log(greet(`sani`));



 let add = (num1, num2) => num1 + num2;
 let result2 = add(6,63)
 console.log(result2);
