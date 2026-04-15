let arr = [123,342,467,24,2346];

let [a,b,c,d,e] = arr;

// console.log(a,e);

let obj = {
    name : "asd",
    id : 2,
    status : "osdw"
}

let {id , name} = obj;
// console.log(id , name);

let users = {
    userId : 1,
    userName : "asdf",
    userLocation : {
        city : "Phagwara",
        state : "Punjab"
    }
}

// let {userName , userId , userLocation} = users;
let {userName , userId , userLocation:{city , state}} = users;

console.log(userName , userId , city , state);