// singleton
// The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

//object literals
// Object.create ---> consturctor method ---> this is singleton

const mySym = Symbol("key1")

const JsUser = {
    name: "Sourin",
    'full name': 'Sourin Kumar Das',
    [mySym]: "myKey1",
    age: 24,
    location: "Kolkata",
    email: "sourin@google.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday","Friday"]
}

console.log(JsUser.email); //sourin@google.com
console.log(JsUser['email']); //sourin@google.com
console.log(JsUser["full name"]); //Sourin Kumar Das
console.log(JsUser[mySym]); //myKey1
console.log(typeof JsUser.mySym); //string
console.log(typeof mySym); //Symbol

JsUser.email = 'sourin@microsoft.com';

console.log(JsUser['email']); //sourin@microsoft.com
Object.freeze(JsUser);

JsUser.email = 'sourin@amazon.com';
console.table(JsUser); 
// ┌───────────────┬──────────┬──────────┬────────────────────────┐
// │    (index)    │    0     │    1     │         Values         │
// ├───────────────┼──────────┼──────────┼────────────────────────┤
// │     name      │          │          │        'Sourin'        │
// │   full name   │          │          │   'Sourin Kumar Das'   │
// │      age      │          │          │           24           │
// │   location    │          │          │       'Kolkata'        │
// │     email     │          │          │ 'sourin@microsoft.com' │
// │  isLoggedIn   │          │          │         false          │
// │ lastLogInDays │ 'Monday' │ 'Friday' │                        │
// └───────────────┴──────────┴──────────┴────────────────────────┘

console.log(JsUser); 
// {
//     name: 'Sourin',
//     'full name': 'Sourin Kumar Das',
//     age: 24,
//     location: 'Kolkata',
//     email: 'sourin@microsoft.com',
//     isLoggedIn: false,
//     lastLogInDays: [ 'Monday', 'Friday' ],
//     [Symbol(key1)]: 'myKey1'
//   }


// SYMBOl
// Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique. Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object. That enables a form of weak encapsulation, or a weak form of information hiding.
// Every Symbol() call is guaranteed to return a unique Symbol. Every Symbol.for("key") call will always return the same Symbol for a given value of "key". When Symbol.for("key") is called, if a Symbol with the given key can be found in the global Symbol registry, that Symbol is returned. Otherwise, a new Symbol is created, added to the global Symbol registry under the given key, and returned.
// we use [] in objects to specify in key side to make its typeof as Symbol



JsUser.greeting = function(){
    console.log(`Hello JS user`);
}

console.log(JsUser.greeting);
//[Function (anonymous)]
console.log(JsUser.greeting());
// Hello JS user
// undefined

JsUser.greetingTwo = function(){
    console.log(`Hello JavaScript user ${this.name}`);
}

console.log(JsUser.greetingTwo());
// Hello JavaScript user Sourin
// undefined