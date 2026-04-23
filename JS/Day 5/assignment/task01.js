
let users = {
    userId : 1,
    userName : "asdf",
    userLocation : {
        city : "Phagwara",
        state : "Punjab"
    },
    phone : 1234567890,
    skills : {
        frontEnd : ["react" , "HTML" , "CSS"],
        backEnd : ["Java" , "Springboot"]
    }
};

let {userId,
    userName,
    userLocation:{city,state},
    phone,
    skills:{
        frontEnd:[react,html,css],
        backEnd:[java , Springboot]
    }
} = users;

// let {userId , userName , phone} = users;

// let {city , state} = users.userLocation;

// let {frontEnd , backEnd} = users.skills;

// console.log("printing superficial details: ");
// console.log(userId , userName , phone);

// console.log("printing locations details: ");
// console.log(city , state);

// console.log("printing skils details: ");
// console.log(frontEnd , backEnd);