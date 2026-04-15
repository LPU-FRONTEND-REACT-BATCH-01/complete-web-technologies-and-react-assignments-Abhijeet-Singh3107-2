// let a:number = 10;
// console.log(a);


// function display(name){

// }


// ------ Arrays ------
// let arr:number[] = [2,3,42,44];
// let arr1:string[] = ["Hello" , "Sir"];

// console.log(arr);

    // Tuples...
// let arrString:[string , string] = ["Hello" , "Byee"];
// let arrString:[string , string] = ["Hello"];        // --> error
// let arrString:[string , number] = ["Hello" , 21];        // --> correct


// Assignment

let value:string|number|boolean = "Hello";

let result:string|number|boolean;

if(typeof value === "string" ){
    result = value.charAt(0).toUpperCase + value.slice(1);
}
else if(typeof value === "number"){
    result = value + 100;
}
else{
    result = !value;
}

console.log(result);6

