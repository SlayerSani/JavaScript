let alien = {
    name: "Sourin",
    technology: "JavaScript",
    laptop: {
        CPU: "i7",
        RAM: 32,
        Brand1: "ThinkPad"
    }
}
console.log(alien?.laptop?.Brand1?.length);
delete alien.laptop
console.log(alien);