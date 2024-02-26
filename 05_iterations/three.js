//for of 

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);   
}

// 1
// 2
// 3
// 4
// 5

const greetings = "Hello WOrld!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is  
// Each char is W
// Each char is O
// Each char is r
// Each char is l
// Each char is d
// Each char is !


//maps
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

// const map = new Map()
// map.set('IN','INDIA')
// map.set('USA','UNITED STATES OF AMERICA')
// map.set('SG', 'SINGAPORE')
// map.set('IN','INDIA')

// console.log(map);

// Map(3) {
//     'IN' => 'INDIA',
//     'USA' => 'UNITED STATES OF AMERICA',
//     'SG' => 'SINGAPORE'
//   }

const map = new Map()
map.set('IN','INDIA')
map.set('USA','UNITED STATES OF AMERICA')
map.set('SG', 'SINGAPORE')
map.set('IN','INDIA')

// console.log(map);

// for (const key of map) {
//     console.log(key)
// }
// [ 'IN', 'INDIA' ]
// [ 'USA', 'UNITED STATES OF AMERICA' ]
// [ 'SG', 'SINGAPORE' ]

for (const [key, value] of map) {
    console.log(key, ' : ', value)
}
// IN  :  INDIA
// USA  :  UNITED STATES OF AMERICA
// SG  :  SINGAPORE



const myObject = {
    'game1': 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, " : ", value)
// }  /// this will throws error for object

