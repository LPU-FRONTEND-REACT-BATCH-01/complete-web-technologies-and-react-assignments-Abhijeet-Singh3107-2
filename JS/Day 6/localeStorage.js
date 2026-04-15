// can not anything other than strings
// data will be stored in key and value
// object -> string we have JSON
// JSON.parse() -> string to object
// JSON.stringify() -> object to string

let cartItems = [];
let product1 = [{id:1 , name: "Laptop"}]

// let cartItems = JSON.parse(localStorage.getItem("cartData")) || [];

// let cartItems = localStorage.setItem("cartData" , JSON.stringify(arr));

document.querySelector('button').addEventListener('click' , () => {
    cartItems.push(product1);
    console.log(cartItems);
    localStorage.setItem('cartItems' , JSON.stringify(cartItems));
})

console.log(cartItems);

localStorage.clear();