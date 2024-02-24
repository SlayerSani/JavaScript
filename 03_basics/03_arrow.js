this
// A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.

// In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called. The Function.prototype.bind() method can set the value of a function's this regardless of how it's called, and arrow functions don't provide their own this binding (it retains the this value of the enclosing lexical context).

const user = {
    username: 'Sourin',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        // {
        //     username: 'Sourin',
        //     price: 999,
        //     welcomeMessage: [Function: welcomeMessage]
        //   }
        //   Sani, welcome to website
        //   {
        //     username: 'Sani',
        //     price: 999,
        //     welcomeMessage: [Function: welcomeMessage]
        //   }
        //   Sid, welcome to website
        //   {
        //     username: 'Sid',
        //     price: 999,
        //     welcomeMessage: [Function: welcomeMessage]
        //   }
    }

}

user.welcomeMessage();  //Sourin, welcome to website
user.username = `Sani`
user.welcomeMessage();  //Sani, welcome to website
user.welcomeMessage(user.username = `Sid`);  //Sid, welcome to website


console.log(this);  //{}


function chai(){
    console.log(this);
}
chai()

{/* <ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 126.64371799863875,
      nodeStart: 0.8623900003731251,
      v8Start: 10.131337000057101,
      bootstrapComplete: 115.18117699958384,
      environment: 68.89532900042832,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1708764079626.763
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
} */}

function chai(){
    let username = 'Sourin'
    console.log(this.username); //undefined
}
chai() //undefined


// const chai = function(){
//     let username = 'Sourin'
//     console.log(this.username);
// }
// chai()  //undefined

// const chai = () => {
//     let username = 'Sourin'
//     console.log(this.username);
// }
// chai()  // undefined

// const chai = () => {
//     let username = 'Sourin'
//     console.log(this);
// }
// chai()  // {}

/**************************************Arrow functions**************************************************/

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))  //7

// const addTwo = (num1, num2) =>  num1 + num2;
// console.log(addTwo(3,4))  //7

// const addTwo = (num1, num2) =>  (num1 + num2);
// console.log(addTwo(3,4)) //7


// const addTwo = (num1,num2) => {username: 'Sourin'}
// console.log(addTwo(3,4)); // undefined

const addTwo = (num1,num2) => ({username: 'Sourin'})
console.log(addTwo(3,4));  //{ username: 'Sourin' }


const myArray = [2,4,6,8,10]
// myArray.forEach()