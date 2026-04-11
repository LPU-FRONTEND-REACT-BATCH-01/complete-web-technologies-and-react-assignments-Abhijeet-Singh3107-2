
let parent_container = document.querySelector(".parent-container");

const fetchData = async () => {
    try{
        // const data = await fetch("https://jsonplaceholder.typicode.com/todos/33");
        const data = await fetch("http://localhost:8082/catalog/products");
        console.log(data);
        if(data.ok){
            const jsonData = await data.json();
            display(jsonData);
            console.log(jsonData);
        }
        else{
            console.log("There is an HTTP Error");
        }
    } catch (error){
        console.log("Unable to fetch data");
    }
    
}
    
let display = (data) => {
    data.map((product) => {
        let container = document.createElement("ul");
        let title = document.createElement("li");
        let price = document.createElement("li");

        title.textContent = product.name;
        price.textContent = product.price;

        container.append(title , price); 
        parent_container.append(container);
       
    })
}

fetchData();
