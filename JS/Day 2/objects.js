
let userData = {
    id : 1,
    name: "Chota Bheem",
    age : 9
}

// console.log(userData);
console.log(userData.name);

userData.city = "Dholakpur";
// console.log(userData);

// keys and values
let keys = Object.keys(userData);
let values = Object.values(userData);
// console.log(keys);
// console.log(values);

// in pairs
let pairs = Object.entries(userData);
// console.log(pairs);

// to make object immutable --> can not modify or add new values
// Object.freeze(userData);
// userData.location = "dfkj";     // no changes done
// console.log(userData);

// to modify but no new data
Object.seal();
userData.id = 3;
console.log(userData);
