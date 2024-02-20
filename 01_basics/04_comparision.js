console.log(2>1)        //true
console.log(2>=1)       //true
console.log(2<1)        //false
console.log(2==1)       //false
console.log(2!=1)       //true


console.log('2'>1);     //true
console.log('02'>1);    //true

console.log(null>0);    //false
console.log(null==0);   //false
console.log(null>=0);   //true
console.log(null<=0);   //true

/*
The reason is that an equality check == and comparisons > < >= <= works differently.
Comprisons converts nll to a number, treting it s 0.
That's why (3) null >= 0 is true and (1) null >0 is false
*/

console.log(undefined == 0);    //false
console.log(undefined > 0);     //false
console.log(undefined < 0);     //false

// === it will not only check value but also the datatypes also

console.log(2===2);     //true
console.log('2'===2);   //false