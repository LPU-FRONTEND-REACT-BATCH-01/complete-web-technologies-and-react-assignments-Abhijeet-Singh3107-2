// function to accept a price
// if price > 2000 -> discount 20%
// if price > 6000 -> discount 25%
// if price < 2000 -> discount 0%
// final output -> final price

let price;

function inputAmount(){
    price = Number(prompt("Enter the total shopping amount"));
}

function calculateFinalAmount(price){
    let discount = 0;
    if(price < 2000){
        discount = 0;
        return "No discount: " + price;
    }
    else if(price >= 2000 && price <= 6000){
        discount = 20;
    }
    else {
        discount = 25;
    }
    return (price - (price * discount)/100);
}

inputAmount();
let finalAmount = calculateFinalAmount(price);
console.log(finalAmount);







