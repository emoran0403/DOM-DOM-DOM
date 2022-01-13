/*
1: When the browser first loads, use the DOM to create and insert a button labeled Add Square into the body
*/
let myButton = document.createElement('button'); // creates a button
myButton.innerHTML = "Add square";  //give this button text that says "add square"
myButton.type = "button"; //gives the button a class name
document.body.appendChild(myButton); // appends the button to the big container div on the page

let bigDiv = document.createElement('div'); //creates a div
bigDiv.className = "div-container"; //gives the div created above a class name
document.body.appendChild(bigDiv); //appends the div to the body of the document


/*
2: When the button is clicked, a new div should be added to the page
*/
myButton.onclick = divAdder //sets the onclick action to run the divAdder function

/*
7: Each div should have an id with a numerical value equivalent to the total number of squares that have been added so far since page load when the Add Square button is clicked
*/
let n = 1 // this variable serves as the id counter so each new div will have an incrementally new value

function divAdder() { //creates the list adder function
    var sqDiv = document.createElement('div');  // creates a div item
    sqDiv.innerHTML = `I am div ${n}`;  // sets the text on the div to be "I am div n, where n starts at 1 and increases on each button press" >>yay template literals!
    sqDiv.setAttribute("id", n); // sets the attribute to the current n

    /*
    8: When hovering over a square, the value of the square's id should display centered in the square, and disappear when the cursor is no longer over the square
    */
    sqDiv.setAttribute("title", n); //sets the element title to be the element's id. the title will show up as a tooltip when the mouse hovers over the element


    n++; // increments n by 1 so that new ids will increase

    /*
    6: When there is no more room, they should wrap to the next line
    */
    sqDiv.className = "sqDiv"; //gives the div created above a class name

    bigDiv.appendChild(sqDiv);  // appends the square divs to the big div in the document body

    
   //sqDiv.addEventListener("mouseover", )
}
