// // let myName = "Sourin"; // 6
// let myName = "Sourin                                "; //38
// // console.log(myName.length);
// console.log(myName.truelength); // undefined

let myHeros = ['Thor','Spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',
    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
    }
}
Object.prototype.sourin = function(){
    console.log(`Sourin is present in all objects`);  
}

Array.prototype.heySourin = function () {
    console.log(`Sourin says hello`);
}
// heroPower.sourin() // Sourin is present in all objects
myHeros.sourin() //Sourin is present in all objects
// heroPower.heySourin() // error
myHeros.heySourin() // Sourin says hello


// inheritance

const user ={
    name:'chai',
    email:'chai@google.com'
}
const Teacher = function() {
    makeVideo: true
}
const TeachingSupport = function() {
    isAvailable: false
}
const TASupport = function() {
    makeAssignment: 'JS Assignment';
    fullTime: 'true';
    __proto__: TeachingSupport
}
Teacher.__proto__ = user

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

// let anotherUserName = "CHAIaurCODE                "
// String.prototype.truelength = function(){
//     console.log(`${this}`);
//     console.log(`${this.name}`);
//     console.log(`True length is: ${this.trim()length}`);
// }
let anotherUserName = "CHAIaurCODE                ";
String.prototype.truelength = function(){
    console.log(`${this}`); //CHAIaurCODE                
    console.log(`${this.name}`);  //undefined
    console.log(`True length is: ${this.trim().length}`); //True length is: 11
}

anotherUserName.truelength();
// CHAIaurCODE                
// undefined
// True length is: 11
"Sourin".truelength();
// Sourin
// undefined
// True length is: 6
"coldcoffee".truelength()
// coldcoffee
// undefined
// True length is: 10