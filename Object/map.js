let map = new Map();

map.set("Sourin","JavaScript");
map.set("Das", "Java");
map.set("Sani", "ReactJS");
map.set("Sourin", "Angular")

// console.log(map.keys());
// console.log(map.has("Sourin"))
// for(let [k,v] of map){
//     console.log(k , " : ", v);
// }

map.forEach((v,k) => {
    console.log(k, " : ", v);
});