const user = {
    username: "Sourin",
    loginCount : 8,
    singedIn: true,

    getUserDetails: function(){
        // console.log(`Got user details from ${this.username}'s database`);
        // console.log(`username: ${this.username}`); 
        // console.log(`username: ${this.username}`); // username: Sourin
        console.log(this);
        // ---> {
        //     username: 'Sourin',
        //     loginCount: 8,
        //     singedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        //   }
    }
}
// console.log(user.username); //Sourin
// console.log(user.getUserDetails()); //Got user details from Sourin's database
// console.log(this); // {}

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn
    return this
}

// const userOne = User('Sourin', 12, true)
// console.log(userOne);
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
      duration: 93.82526400033385,
      nodeStart: 0.6638879999518394,
      v8Start: 7.791904999874532,
      bootstrapComplete: 85.77949600014836,
      environment: 64.09803200047463,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1710169563555.098
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  username: 'Sourin',
  loginCount: 12,
  isLoggedIn: true */}
//   console.log(userOne.isLoggedIn); //true


// const userOne = User('Sourin', 12, true);
// const userTwo = User('ReactJS Developer', 11, false)
// console.log(userOne);
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
      duration: 74.43079899996519,
      nodeStart: 0.5664800005033612,
      v8Start: 7.963670000433922,
      bootstrapComplete: 63.90833400003612,
      environment: 40.7325689997524,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1710169774467.888
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  username: 'ReactJS Developer',
  loginCount: 11,
  isLoggedIn: false
} */}

const userOne = new User('Sourin', 12, true);
const userTwo = new User('ReactJS_Developer', 11, false)
console.log(userOne); // User { username: 'Sourin', loginCount: 12, isLoggedIn: true }
// console.log(userTwo); // User {username: 'ReactJS Developer',loginCount: 11,isLoggedIn: false}


// The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function

// When a function is called with the new keyword, the function will be used as a constructor. new will do the following things:

// 1. Creates a blank, plain JavaScript object. For convenience, let's call it newInstance.
// 2. Points newInstance's [[Prototype]] to the constructor function's prototype property, if the prototype is an Object. Otherwise, newInstance stays as a plain object with Object.prototype as its [[Prototype]].
// 3. Executes the constructor function with the given arguments, binding newInstance as the this context (i.e. all references to this in the constructor function now refer to newInstance).
// 4. If the constructor function returns a non-primitive, this return value becomes the result of the whole new expression. Otherwise, if the constructor function doesn't return anything or returns a primitive, newInstance is returned instead. (Normally constructors don't return a value, but they can choose to do so to override the normal object creation process.)

console.log(userTwo.constructor);  //[Function: User]
console.log(`instanceof ${userTwo}`); // instanceof [object Object]
