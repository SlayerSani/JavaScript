const accountId = 144553;
let accountEmail = 'sourin@google.com';
var accountPassword = '12345';
accountCity = 'Kolkata'

// accountId = 2;  // not allowed

accountEmail = 'sourin@microsoft.com';
accountPassword = '78709'
accountCity = 'Bengaluru'

console.log(accountId); 
// 144553
console.table([accountId, accountEmail, accountPassword, accountCity])
//    ┌─────────┬────────────────────────┐
// // │ (index) │         Values         │
// // ├─────────┼────────────────────────┤
// // │    0    │         144553         │
// // │    1    │ 'sourin@microsoft.com' │
// // │    2    │        '78709'         │
// // │    3    │      'Bengaluru'       │
//    └─────────┴────────────────────────┘

/*
Prefer not to use "var"
because of issue in block scope and function 
*/

let accountState;
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])

// ┌─────────┬────────────────────────┐
// │ (index) │         Values         │
// ├─────────┼────────────────────────┤
// │    0    │         144553         │
// │    1    │ 'sourin@microsoft.com' │
// │    2    │        '78709'         │
// │    3    │      'Bengaluru'       │
// │    4    │       undefined        │
// └─────────┴────────────────────────┘

// when the variable is not assinge with any value is prints "undefined"