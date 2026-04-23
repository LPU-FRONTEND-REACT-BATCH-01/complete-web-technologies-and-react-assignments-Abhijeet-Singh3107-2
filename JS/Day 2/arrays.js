let arr = [23 , "Abx" , true , undefined];
// console.log(arr);

arr.push(21);
// console.log(arr);

arr.shift();        // removes the first element...
// console.log(arr);

// map
let names = ["a" , "b" , "c"];

let callback = (name , index) => {
    console.log(name , index);
}

names.map(callback);

// reduce
let numbers = [2,1,23,6,4,88,6];

let result = numbers.reduce((max , current) => {
    if(current > max){
        max = current;
    }
    return max;
}, 0);

// console.log("Max element is: " , result);

// sort method --> sorts lexographically / also returns a new array

let names2 = ["aab" , "abx" , "axc"];
// console.log(names2.sort());

let sortedArray = numbers.sort((num1 , num2) =>{
    return  num1-num2;
});

// console.log(numbers);
// console.log(sortedArray);


// filter --> returns a new array.
const filteredArray = numbers.filter((element) => {
    return element > 20
})

console.log(filteredArray);


