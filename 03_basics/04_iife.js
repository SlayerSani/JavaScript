 // Immediately Invoked Function Expression (IIFE)
 // Site : https://developer.mozilla.org/en-US/docs/Glossary/IIFE
 // IIFE is used to avoid the global scope pollution and immediately execute the function

 function chai(){
    console.log(`DB CONNECTED`);
 }
 chai(); //DB CONNECTED

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
 })();  //DB CONNECTED

 // (function)(exectuion):IIFE

(()=>{
    //simple IIFE
    console.log(`DB CONNECTED2`);
})();  //DB CONNECTED2

((name)=>{
    console.log(`DB CONNECTED2 ${name}`);
})(`Sourin`);  //DB CONNECTED2 Sourin