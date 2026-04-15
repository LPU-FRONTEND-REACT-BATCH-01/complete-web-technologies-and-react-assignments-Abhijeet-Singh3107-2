
let cart = [];
let parent_container = document.querySelector(".parent_container");
let cart_container = document.querySelector(".cart_container");

const fetchData = async() => {
    let jsonData;
    try{
        const data = await fetch("https://dummyjson.com/products");
        if(data.ok){
            jsonData = await data.json();
            // console.log(jsonData);
        }
        else{
            console.log("Error fetching data...");
        }
    }catch(err){
        console.log("Unable to fetch data...")
    }
    console.log(jsonData.products);
    display(jsonData.products);
    
}

fetchData();


let display = (data) => {
    data.map((product) => {
        let container = document.createElement("ul");
        let title = document.createElement("li");
        let price = document.createElement("li");
        let button = document.createElement("button");

        title.textContent = product.title;
        price.textContent = product.price;
        button.textContent = "Add to Cart";

        container.append(title , price , button); 
        parent_container.append(container);

        button.addEventListener('click' , () => {
            addToCart(product);
        })
       
    })
}

let addToCart = (product) => {
    // cart=[]
    cart.push(product);
    localStorage.setItem('cart' , JSON.stringify(cart))
    displayCart();
    console.log(cart);
}

let displayCart = () => {

    cart_container.innerHTML = "";       // better approach instead of emptying the cart everytime.

    cart.forEach((product) => {
        let container = document.createElement("ul");
        let title = document.createElement("li");
        let price = document.createElement("li");
        let button = document.createElement("button");

        title.textContent = product.title;
        price.textContent = product.price;
        button.textContent = "Remove item";

        container.append(title, price , button);
        cart_container.append(container);

        button.addEventListener('click' ,() => {
            let index = cart.indexOf(product);
            if(index !== -1){
                cart.splice(index , 1);
                console.log(cart);
                displayCart();
            }    
        })
    });

};

// localStorage.clear();





