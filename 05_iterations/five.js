const coding = ['js','rb','py','java','cpp']

// coding.forEach( function(item){
//     console.log(item);
// })
// js
// rb
// py
// java
// cpp

// coding.forEach((item) => {
//     console.log(item)
// })
// js
// rb
// py
// java
// cpp

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)
// js
// rb
// py
// java
// cpp

coding.forEach((item,index,arr)=> {
    console.log(item,index,arr);
})

// js 0 [ 'js', 'rb', 'py', 'java', 'cpp' ]
// rb 1 [ 'js', 'rb', 'py', 'java', 'cpp' ]
// py 2 [ 'js', 'rb', 'py', 'java', 'cpp' ]
// java 3 [ 'js', 'rb', 'py', 'java', 'cpp' ]
// cpp 4 [ 'js', 'rb', 'py', 'java', 'cpp' ]

const myCoding = [
    {
        languageName: 'JavaScript',
        LanguageFileName: 'js'
    },
    {
        languageName: 'Python',
        LanguageFileName: 'py'
    },
    {
        languageName: 'Java',
        LanguageFileName: 'java'
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})
// JavaScript
// Python
// Java
myCoding.forEach((item)=>{
    console.log(item.LanguageFileName)
})
// js
// py
// java