// write a function that will accept username , email , password
// when i log it's values should be assigned.

let userName;
let password;
let email

function inputData(){
    userName = (prompt("Enter the user name"));
    password = (prompt("Enter the password"));
    email = (prompt("Enter the email"));
}

let userObj = {

}

function createUserObject(userName , email, password){
    userObj.username = userName;
    userObj.email = email;
    userObj.password = password;
    console.log(userObj);
}

inputData();
createUserObject(userName , email, password);