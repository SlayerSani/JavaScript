// If Statement

// if(condition){
//     scope
// }

// const isUserLoggedIn = true
// const tempreture = 41

// if(tempreture === 81){
//     console.log('Less than 50')
// }
// else{
//     console.log('Tempreture is greater than 50');

// }
// console.log('Exexuted');
// <, >, <=, >=, ==(checks equal), !=(not equal), ===(check qual and type of data as well), !==( checks not equal), 


// const score = 200

// if(score>100){
//     const power = 'fly'
//     console.log(`Uses power: ${power}`)
// }
// console.log(`Uses power: ${power}`)

// const score = 200

// if(score>100){
//     var power = 'fly'
//     console.log(`Uses power: ${power}`)
// }
// console.log(`Uses power: ${power}`)

// const balance = 1000

// if (balance> 500) console.log('test');  // this is implecite scope
// console.log('test2');

// if (balance < 500){
//     console.log('less than 500');
// }
// else if( balance < 750){
//     console.log('less than 750')
// } 
// else if(balance < 1000){
//     console.log('less than 1000')
// }
// else if(balance < 1250){
//     console.log('less than 1250')
// }
// else(balance === 1000 )
//    { console.log("equal to 1000")}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard ){  // && checks both conditions
    console.log("Allow to buy courses")
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log('User logged in');
}

