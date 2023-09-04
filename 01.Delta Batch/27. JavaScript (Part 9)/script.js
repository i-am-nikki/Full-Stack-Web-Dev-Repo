/*Qs1. Create a new input and button element on the page using JavaScript only. 
Set the text of button to “Click me”.*/

let input= document.createElement('input');
input.type='text';
let body=document.querySelector('body');
body.appendChild(input);

let button= document.createElement('button');
button.innerHTML= "Click me";
body.appendChild(button);

/*Qs2. Add the following attributes to the element: Change placeholder value of 
input to "username" - Change the id of button to "btn".*/

input.setAttribute('placeholder', 'username');
button.setAttribute('id', 'btn');
console.dir(button.getAttribute('id'));

/*Qs3. Access the `btn` using the `querySelector` and button `id`. 
Change the button background color to blue and text color to white.*/

let button1= document.querySelector('#btn');
button1.style.backgroundColor= "blue";
button1.style.color="white";

/*Qs4. Create an `<h1>` element on the page and set its text to "DOM Practice"
 underlined. Change its color to purple.*/

 let h1= document.createElement('h1');
 h1.innerText="DOM Practice";
 h1.style.color="purple";

 h1.innerHTML= `<u> ${h1.innerText} </u>`;
 document.body.appendChild(h1);

/*Qs5. Create a `<p>` tag on the page and set its text to "Apna College **Delta** 
Practice", where Delta is bold. */

let p= document.createElement('p');
p.innerHTML="Apna College <strong> Delta </strong> Practice";
document.body.append(p);

