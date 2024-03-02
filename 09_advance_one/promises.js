// // The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// // A Promise is in one of these states:

// // pending: initial state, neither fulfilled nor rejected.
// // fulfilled: meaning that the operation was completed successfully.
// // rejected: meaning that the operation failed.

// // MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// const promiseOne = new Promise(function(resolve, reject){
//     // do n async task
//     //DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed");
// })


// // const promiseTwo = 
// // new Promise((resolve, reject){
// //     setTimeout(function(){
// //         console.log("Async task 2");
// //         resolve();
// //     })
// // }).then(function(){
// //     console.log("Async 2 resoled");
// // })

// new Promise((resolve, reject) => { // Added arrow function and parameters
//     setTimeout(() => { // Changed to arrow function
//         console.log("Async task 2");
//         resolve();
//     }, 1000); // Specified timeout duration in milliseconds
// }).then(() => { // Removed unnecessary function parameter
//     console.log("Async 2 resolved");
// });


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username:'sani', password:'123'})
//         }else{
//             reject('ERROR : SOMETHING WENT WRONG')
//         }
//     }, 1000)
// })
// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(() => console.log("The promise is either resolved or rejected"))


// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username:'JavaScript', password:'123'})
//         }else{
//             reject('ERROR : JS WENT WRONG')
//         }
//     }, 1000)
// })
// // async function consumePromiseFive (){
// //     const response = await promiseFive
// //     console.log(response);
// // }
// // console.log(consumePromiseFive);

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     }catch(error){
//         console.log(error);
//     }
// }

// consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         console.log(response);
//         // const data = await response.json();
//         // console.log(data);
//     } catch (error) {
//         console.error("E: ", error); // Corrected the error logging
//     }
// }
// getAllUsers();
// import fetch from "node-fetch";

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

const fetch = require("node-fetch");
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))



// promise.all
// yes this is also available, kuch reading aap b kro.

// Install it in your Node application like this

// npm install node-fetch
// then put the line below at the top of the files where you are using the fetch API:

// import fetch from "node-fetch";
// If your application cannot be updated to use ESM (aka import syntax), and you need to use CommonJS (aka require), then stick with v2 of node-fetch. As per their README, v2 will continue to receive critical bug fixes.

// npm install node-fetch@2
// and then this will work,

// const fetch = require("node-fetch");