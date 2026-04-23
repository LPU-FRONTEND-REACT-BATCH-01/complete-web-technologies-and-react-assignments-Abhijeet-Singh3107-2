// DOM --> Document Object Model
// let container = document.getElementsByClassName("container");
// let heading = document.getElementById("heading");
// let paragraph = document.getElementsByTagName("p");




// using query selector

let heading = document.querySelector("#heading");
let paragraph = document.querySelector("p");
let container = document.querySelectorAll(".container");

console.log(container);
console.log(heading);
console.log(paragraph);


// heading.classList.add("heading");
// heading.classList.remove("heading");
// heading.classList.toggle("heading");


// elements methods

// append()
// remove()
// createElement()

let ul = document.querySelector(".fruits");

let li = document.createElement("li");
li.textContent = "Orange";

ul.append(li);

// after --> after any element
// before --> before any element

// Event Listeners

let button = document.querySelector(".submit");
let input = document.querySelector("input");
let todo_ul = document.querySelector(".todo");

// button.addEventListener('click' , () => {
//     console.log("Button is clicked...");
// });

button.addEventListener('click' , () => {
    let li = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete item";

    let doneBtn = document.createElement("button");
    doneBtn.innerText = "Over";

    let inputText = input.value;

    li.textContent = inputText;

    li.append(delBtn);
    li.append(doneBtn);
    todo_ul.append(li);

    delBtn.addEventListener('click' , () => {
        li.remove();
        delBtn.remove();
    })

    doneBtn.addEventListener('click' , () => {
        li.classList.add("textStrike");
        
    });

});




