// function to take username email and password
// username remove extra space -> convert to lower case
// email -> lowercase then seperate domain and user name
// password -> check if length > 8 and if contains @ ,* , /

let userName;
let password;
let email

function inputData(){
    userName = (prompt("Enter the user name"));
    password = (prompt("Enter the password"));
    email = (prompt("Enter the email"));
}

let emailArray;

function sanitization(userName , email , password){
    // remove extra space
    userName = userName.toLowerCase().trim();
    console.log(userName)

    // email
    email = email.toLowerCase().trim();
    console.log(email);
    emailArray = email.split("@");

    // password
    if(password.length > 8){
        if(password.includes('@') && password.includes('*') && password.includes('/')){
            console.log("Valid password");
        }
        else{
            console.log("Invalid password");
        }
    }
    else{
        console.log("Password is to short");
    }
}

inputData();
sanitization(userName , email , password);
console.log(emailArray);


