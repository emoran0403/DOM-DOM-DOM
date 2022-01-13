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

/*
9: When a square is clicked, it should change to a random background color (You can randomly choose from a set of colors you predefine if you wish)
*/

function randomColor() { //this function will return a random rgb color r, g, b
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;

}

function divAdder() { //creates the list adder function
    var sqDiv = document.createElement('div');  // creates a div item
    sqDiv.innerHTML = `I am div ${n}`;  // sets the text on the div to be "I am div n, where n starts at 1 and increases on each button press" >>yay template literals!
    sqDiv.setAttribute("id", n); // sets the attribute to the current n

    /*
    8: When hovering over a square, the value of the square's id should display centered in the square, and disappear when the cursor is no longer over the square
    */
    sqDiv.setAttribute("title", n); //sets the element title to be the element's id. the title will show up as a tooltip when the mouse hovers over the element


    n++; // increments n by 1 so that new ids will increase
    sqDiv.className = "sqDiv"; //gives the div created above a class name
    bigDiv.appendChild(sqDiv);  // appends the square divs to the big div in the document body

    sqDiv.debounceId = 0;

    sqDiv.addEventListener("click", function (event) {
        // If a setTimeout ID exists for the element
        if (sqDiv.debounceId) {
            // then cancel it and reset it to zero
            window.clearTimeout(sqDiv.debounceId);
            sqDiv.debounceId = 0;
        }


        // If a single click fires (aka event.detail is 1)
        if (event.detail === 1) {
            // then create a new setTimeout with single click functionality
            // and save the new setTimeout ID to the element.debounceID property
            sqDiv.debounceId = setTimeout(function () {
                console.log("Single!");
                sqDiv.style.backgroundColor = randomColor();
            }, 500);
            // Else if it's a double click, do double click actions
        } else if (event.detail === 2) {
            console.log("Double");

            if (this.getAttribute('id') % 2 === 0) { //If the id of the square is even
                //The square after the clicked square should be removed from the page  >>  Node.nextSibling
                //console.log('this was an even id box');
                try { //these try and catch blocks are needed to handle errors
                    this.parentNode.removeChild(this.nextSibling);
                    /*
                    the above line will remove the next sibling of our sqDiv via
                    the removeChild method of the parent node of the sqDiv that was clicked
                    */
                }
                catch (err) { //this defines what will happen if the code in the try block encounters an error
                    alert("There is no box after this one") //this displays an alert when the code from the try block encounters an error
                }
            } else {  //If the id of the square is odd
                //The square before the clicked square should be removed from the page  >>  Node.previousSibling
                //console.log('this was an odd id box');
                try {
                    this.parentNode.removeChild(this.previousSibling);
                }
                catch (err) {
                    alert("There is no box before this one")
                }

            }
        }
    });
}



/*

>> this is how I can deal with errors.  the code in the try block is what I want to handle errors for

the code in the catch(err) block is what to do when those errors come up.  In this lab, I just need a catch-all alert.  later on I can be more specific depending on use-cases

try {
  this.parentNode.removeChild(this.nextSibling);
}
catch(err) {
  alert("There is no box after this one")
}
*/



/*
getting the id of the clicked on element, then adding 1 does not work beyond the first removal
EXAMPLE: if 2 is clicked, then 3 is removed.  if 2 is clicked again, 4 should be removed, but it is still looking for 3, since that is the next id in line
this.nextsibling, then get the parent, then remove this
node.
this.removeChild(this.nextsibling)


//this.removeChild(this.nextsibling)
                // - does not work - let removeThis = parseInt(this.getAttribute('id')) + 1;
                // - does not work - console.log(`via parseInt ${removeThis}`);
                // - does not work - console.log(+removeThis);
                // - does not work - let toRemove = document.getElementById(+removeThis);
                // - does not work - let d_nested = document.getElementById("nested");
                // - does not work - bigDiv.removeChild(toRemove);
*/