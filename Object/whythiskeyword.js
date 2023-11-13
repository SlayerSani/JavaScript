// function getFastLaptop(laptop,laptop2){
//     if(laptop.cpu > laptop2.cpu)
//         console.log(laptop);
//     else
//         console.log(laptop2);
// }


let laptop2 = {
    cpu: 'i7',
    ram: 64,
    brand: 'Apple',

    compare: function(this){
        if(this.cpu > other.cpu)
        console.log(this);
    else
        console.log(other);
    },

    getConfig: function(){
        // let storage =100;
        console.log(this.cpu);
    }
}

let laptop = {
    cpu: 'i9',
    ram: 32,
    brand: 'ThinkPad',

    // compare: function(other){
    //     if(this.cpu > other.cpu)
    //     console.log(this);
    // else
    //     console.log(other);
    // },

    getConfig: function(){
        // let storage =100;
        console.log(this.brand);
    }
}

// getFastLaptop(laptop, laptop2);

// if(laptop.cpu > laptop2.cpu){
//     console.log(laptop);
// }
// else{
//     console.log(laptop2);
// }

laptop.compare(laptop2)