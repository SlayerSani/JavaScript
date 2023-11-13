let laptop = {
    cpu: 'i9',
    ram: 64,
    brand: 'lenevo',

    getConfig: function(){
        // let storage =100;
        console.log(this.cpu);
    }
}

let laptop2 = {
    cpu: 'i9',
    ram: 64,
    brand: 'hp',

    getConfig: function(){
        // let storage =100;
        console.log(this.brand);
    }
}

laptop.getConfig();
laptop2.getConfig();