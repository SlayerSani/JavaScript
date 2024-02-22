// Dates

let myDate = new Date()
console.log(myDate)  //2024-02-22T20:38:35.898Z
console.log(typeof myDate) //object

console.log(myDate.toString())  //Fri Feb 23 2024 02:09:17 GMT+0530 (India Standard Time)
console.log(myDate.getTime());  //1708634400142
console.log(myDate.toLocaleString());  //2/23/2024, 2:10:52 AM
console.log(myDate.toDateString());  //Fri Feb 23 2024

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate); //2023-01-22T18:30:00.000Z
// console.log(myCreatedDate.toString()); //Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)
// console.log(myCreatedDate.toLocaleDateString()); //1/23/2023


// let myCreatedDate = new Date("2023-01-23");
// console.log(myCreatedDate.toLocaleString()) //1/23/2023, 5:30:00 AM

let myCreatedDate = new Date("02-23-2024");
console.log(myCreatedDate.toLocaleString()) //2/23/2024, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp); //1708635014340
console.log(myCreatedDate.getTime()); //1708626600000


console.log(Math.floor(Date.now()/1000))  //1708635161

let newDate = new Date()
console.log(newDate); //2024-02-22T20:56:34.317Z
console.log(newDate.getHours()); //2
console.log(newDate.getMinutes()); //26
console.log(newDate.getFullYear()); //2024
console.log(newDate.getMonth() + 1); //1
console.log(newDate.getTime()); //1708635394317
console.log(newDate.getTimezoneOffset()); //-330



// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",

})