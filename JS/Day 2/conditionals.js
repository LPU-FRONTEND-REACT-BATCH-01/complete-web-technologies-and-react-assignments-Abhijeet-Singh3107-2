
// let num = 3;

// if(num > 0){
//     console.log("Number is greater than 0");
// }
// else if (num < 0){
//     console.log("Number is less than 0");
// }
// else{
//     console.log("Number is equal to zero");
// }

let input = Number(prompt("Enter the number"));

if(input < 8){
    for(let i=0;i<input;i++){
        console.log("It is "  + input + " -> " + (i+1) + " times");
    }
}
else{
    for(let i=0;i<input*input;i++){
        console.log("It is " + input + " -> " + (i+1) + " times".);
    }
}

