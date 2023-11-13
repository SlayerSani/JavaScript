function Alien(name, tech){
    this.name = name;
    this.tech = tech;

    this.work = function(){
        console.log(`Solving bug as SDE`);
    }
    return this;
}

let alien1 = new Alien("Sourin", "JavaScript")
let alien2 = new Alien("Sani", "Java")

alien1.tech = 'ReactJS';

console.log(alien1);
console.log(alien2);
alien1.work();