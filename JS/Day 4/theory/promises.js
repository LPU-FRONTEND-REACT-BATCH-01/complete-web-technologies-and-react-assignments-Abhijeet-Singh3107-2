
function burnStove(){
    let burningStove = true
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            if(burningStove){
            console.log("Stove is buring...");
            resolve();
            }
            else{
                console.log("Stove is still off...");
                reject();
            }
        } , 2000);
        
    });
}

function pourOil(){
    let pouringOil = true
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            if(pouringOil){
            console.log("Oiling done...");
            resolve();
            }
            else{
                console.log("Oiling still pending...");
                reject();
            }
        } , 1000);
        
    });
}

function fryOnions(){
    let fryingOnions = false
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            if(fryingOnions){
            console.log("Onion fried...");
            resolve();
            }
            else{
                console.log("Onions still not fried...");
                reject("Will not be able to cook further");
            }
        } , 5000);
        
    });
}

function addRice(){
    let addingRice = true
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            if(addingRice){
            console.log("Rice added....");
            resolve();
            }
            else{
                console.log("Rice not added...");
                reject();
            }
        } , 3000);
        
    });
}

// burnStove()
//     .then(pourOil)
//     .then(fryOnions)
//     .then(addRice)
// .catch((err) => {
//     console.log(err);
// });

// burnStove()
//     .then(() => pourOil())
//     .then(() => fryOnions())
//     .then(() => addRice())
// .catch((err) => {
//     console.log(err);
// });


    // Async Await...
const fetchData = async () => {
    try{
        // const data = await fetch("https://jsonplaceholder.typicode.com/todos/33");
        const data = await fetch("http://localhost:8082/catalog/products");

        if(data.ok){
            const jsonData = await data.json();
            console.log(jsonData);
        }
        else{
            console.log("There is an HTTP Error");
        }
    } catch (error){
        console.log("Unable to fetch data");
    }
    
}
fetchData();


