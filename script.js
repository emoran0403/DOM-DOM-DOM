

let bigDiv = document.createElement('div'); //creates a div
bigDiv.className = "div-container"; //gives the div created above a class name
document.body.appendChild(bigDiv); //appends the div to the body of the document

/*
1: When the browser first loads, use the DOM to create and insert a button labeled Add Square into the body
*/
let myButton = document.createElement('button'); // creates a button
myButton.innerHTML = "Add square";  //give this button text that says "add square"
myButton.type = "button"; //gives the button a class name
bigDiv.appendChild(myButton); // appends the button to the big container div on the page

/*
2: When the button is clicked, a new div should be added to the page
*/
myButton.onclick = divAdder //sets the onclick action to run the divAdder function

let n = 1 // this variable serves as the id counter so each new div will have an incrementally new value

function divAdder() { //creates the list adder function
    var sqDiv = document.createElement('div');  // creates a div item
    sqDiv.innerHTML = `I am div ${n}`;  // sets the text on the div to be "I am div n, where n starts at 1 and increases on each button press" >>yay template literals!
    bigDiv.appendChild(sqDiv);  // appends the square divs to the big div in the document body

    /*
    3: The div should be a black square
    */
    sqDiv.style.background = black;
    sqDiv.style.color = white;
}
