// function show(){
//     console.log("Hi");
// }
// // function abc(){
// //     show();
// // }
// // abc();
// show();

let num = 1;
function show(){
    console.log(`hi`, num);
    num++;
    if(num<=10358)
    show();
}
show();