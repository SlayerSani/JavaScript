//print object one by one
let alien = {
    name: "Sourin",
    technology: "JavaScript",
    laptop: {
        CPU: "i7",
        RAM: 32,
        Brand1: "ThinkPad"
    }
}

for(let key in alien){
    // console.log(key, alien.technology);
    console.log(key, alien[key]);
}

// console.log(alien);