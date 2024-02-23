// singleton

// const tinderUser = new Object()  // this is singleton
const tinderUser = {}  // this is non singleton
// console.log(tinderUser) //{}
tinderUser.id ='123abc'
tinderUser.name='Sani'
tinderUser.isLoggedIn= false
// console.log(tinderUser); //{ id: '123abc', name: 'Sani', isLoggedIn: false }

const regularUser = {
    email: 'some@gmail.com',
    fullname: {
        userfullname:{
            firstname:'Sourin',
            middlename:'Kumar',
            lastname:'Das'
        }
    }
}
// console.log(regularUser.fullname.userfullname.middlename); //Kuma

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}
const obj4 = {5: 'a', 6: 'b'}
// const obj3 = {...obj1,...obj2}
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = Object.assign({}, obj1, obj2, obj4)
console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Object.assign({},target,source): The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

const users = [
    {
        id: 1,
        email: 's@gmail.com'
    },
    {
        id: 2,
        email: 'o@gmail.com'
    },
    {
        id: 3,
        email: 'u@gmail.com'
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));  //[ 'id', 'name', 'isLoggedIn' ]
console.log(typeof Object.keys(tinderUser));  //object
console.log(Object.values(tinderUser));  //[ '123abc', 'Sani', false ]
console.log(Object.entries(tinderUser));  //[ [ 'id', '123abc' ], [ 'name', 'Sani' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true


// The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it).
// The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
// The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
// The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.


