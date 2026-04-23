// copying the object

let original = {
    id:1,
    name:"Asd",
    city:"zdf"
}
console.log("original: ");
console.log(original);

// 1.Structure clone
let duplicate = structuredClone(original);
console.log("duplicate: ");
console.log(duplicate);

original.state = "szdjv";

console.log("original: ");
console.log(original);
console.log("duplicate: ");
console.log(duplicate);

// spread operators



// rest operators


