/*
Qs1. Try out the following events in EventListener on your own:
> mouseout
> keypress
> Scroll
> load 
*/

// let h2= document.querySelector("h2");
// h2.addEventListener("mouseout", function(){
//     console.log("mouseout is trigger.");
// });

// let input= document.querySelector('input');
// input.addEventListener("keypress", function(){
//     console.log("key was pressed!");
// });

// let windowobj = window;
// windowobj.addEventListener('scroll' , function() {
//     console.log("scroll is triggered.");
// });

// windowobj.addEventListener('load', function(){
//     console.log("Webpage and resources are fully loaded!")
// });

/*Qs2. Create a button on the page using JavaScript. Add an event listener
to the button that changes the button’s color to green when it is clicked. */

let btn = document.createElement('button');
btn.innerText = "click me";
let body = document.querySelector('body');

if (body) {
    body.appendChild(btn);
    btn.addEventListener('click', function () {
        btn.classList.add('greenbackground');
    });

}

/*Qs3. Create an input element on the page with a placeholder "Enter your name"
and an H2 heading on the page inside HTML. 

The purpose of this input element is to enter a user's name, so it should only
input letters from a-z, A-Z, and space (all other characters should not be detected).
Whenever the user inputs their name, their input should be dynamically visible
inside the heading.

[Please note that no other character apart from the allowed characters should be
visible in the heading.] */

// Create an input element and set its placeholder
let inp2= document.createElement('input');
inp2.placeholder= "Enter your name";
// Create an H2 heading element
let h2 = document.createElement('h2');
// Append the H2 heading element to the body
body.append(h2);
// Check if the 'body' element exists before appending the input element
if(body){
    body.appendChild(inp2);
}
// Add an event listener to the input element for the "input" event
inp2.addEventListener('input', function(){
     // Get the user's input from the input element
    let user = inp2.value;
    // Use a regular expression to match only letters (A-Z, a-z) and space
    let filterLetters = user.replace(/[^A-Za-z\s]/g, ' ');
    user = filterLetters;
     // Set the user's filtered input as the content of the H2 heading
    h2.innerText =user;
});