
const cartItems = [
    {
        id: 1,
        name: "Watch",
        price: "2999",
        quantity: 3
    },
    {
        id: 2,
        name: "Shoes",
        price: "299",
        quantity: 5
    },
    {
        id: 3,
        name: "Ear phones",
        price: "199",
        quantity: 8
    }
];
// sort by name...
const sortedNames = cartItems.sort((item1 , item2) => {
    if(item1.name > item2.name) return 1;
    if(item1.name < item2.name) return -1;
});
console.log("Sort by names: ");
console.log(sortedNames);

// sort by price...
const sortPrice = cartItems.sort((item1 , item2) => {
    return item1.price - item2.price;
});
console.log("Sorted by price")
console.log(sortPrice);

// sort by quantity...
const sortedQuantity = cartItems.sort((item1 , item2) => {
    return item1.quantity - item2.quantity;
});
console.log("sorted by quantity")
console.log(sortedQuantity)

