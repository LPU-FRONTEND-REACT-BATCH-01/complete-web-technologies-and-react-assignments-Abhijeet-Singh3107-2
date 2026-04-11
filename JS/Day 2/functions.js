

let greet = function display(name){
    console.log(name);
}

greet("abx");

// IIFE
(function(){
    console.log("data fetched...");
})()

// Arrow Function
let display = (name) => {
    console.log("name is: " + name);
} 

display("ladooo");

// Higher order function -> a function that accepts function as a argument , or returns a function

function calculator(a,b,operation){
    return operation(a,b);
}

let add = (a,b) => {
    return a+b;
}

let sub = (a,b) => {
    return a-b;
}

let division = (a,b) => {
    return a/b;
}

let remainder = (a,b) => {
    return a%b;
}

let multiply = (a,b) => {
    return a*b;
}


let result = calculator(10,20,multiply);
console.log("Result is: " + result);

