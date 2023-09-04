console.dir(document);
// document.all[8].innerText = "Peter Parker"; //all property is depreciated now' and won't work..
document.querySelector('h1').innerText = "Peter Parker";
let mainIMG= (document.getElementById('main-img'));
console.log(mainIMG);
console.log(typeof mainIMG);
let pdescription= document.getElementById("description");
pdescription.innerText= "Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books.";

let smallImg= (document.getElementsByClassName("oldImg"));

for(let i=0; i<smallImg.length; i++){
    smallImg[i].src="https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png";
    console.log(`img ${i} has been changed. `);
}

console.dir(document.getElementsByTagName("p"));
let newParagraph = document.getElementsByTagName('p')[0];
let innerText= newParagraph.innerHTML;
let boldText = "<strong>" +innerText + "</strong>";
newParagraph.innerHTML=boldText;

let newPara = document.getElementsByTagName('p')[1];
newPara.innerHTML= `<b> ${newPara.innerText} </b>`;

let img1= document.querySelector('img');
console.dir(img1.getAttribute('id')); //width is 35%
img1.setAttribute('id', 'spiderman'); //after changing the name of id
console.dir(img1.getAttribute('id')); //width has changed to its original size.

//let's change the src attribute of img
img1.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Spider-Man_%282002_film%29_poster.jpg/220px-Spider-Man_%282002_film%29_poster.jpg");
console.log("img has changed successfuly using setAttribute method for src attribute!");

//manipulating style with style attribute...............
let heading = document.querySelector('h1');
heading.classList.add("maroon");
// heading.style.color="darkorange";
// heading.style.backgroundColor= "black";
// heading.style.width = "200px";
// let links = document.querySelectorAll('.box a');

// for(let i=0; i<links.length; i++){
//     links[i].style.color= "green";
// }

// for(link of links){
//     link.style.color="maroon";
// }

//Navigation on page.............................................................................
let h4= document.querySelector('h4');
console.dir(h4.parentElement);
console.dir(h4.children);
console.dir(h4.childElementCount);
console.dir(h4.previousElementSibling);
console.dir(h4.nextElementSibling);

//Adding Elements on Page.............................................................................
let body = document.querySelector('body');
let newP = document.createElement('p');
newP.innerText= "HI, I'M New Paragraph";
body.appendChild(newP); 

let box= document.querySelector('.box');
box.appendChild(newP); //now inserted at box and previous one has been removed so, copy don't form. 
newP.append(" -This is new text.") //.append used to add new value to already existing value.
box.prepend(newP);

//insertAdjacentElement................................................................................
let btn= document.createElement("button");
btn.innerHTML= "NEW Button!!!";

let p= document.querySelector('p');
p.insertAdjacentElement('beforebegin', btn);
p.insertAdjacentElement('afterbegin', btn);
p.insertAdjacentElement('beforeend', btn);
p.insertAdjacentElement('afterend', btn);

body.removeChild(btn);
// btn.remove();

/*Practice Questions..
1.) Add the following elements to the container using only javascript and the DOM methods.

i.) a <p> with red text that says "Hey I'm red!"
ii.)an <h3> with blue text that says "I'm a blue h3!"
iii.) a <div> with a black border and pink background color with the following elements inside of it:
    > another <h1> that says "I'm in a div"
    > a <p> that says "ME TOO!"
*/

//i.)
let p2 = document.createElement('p');
p2.innerHTML= "Hey I'm red!";
p2.style.color='red';
let body2= document.querySelector('body');
body2.appendChild(p2);

//ii.)
let heading3= document.createElement('h3');
heading3.innerText= "I'm a blue h3!";
heading3.style.color='blue';
body2.append(heading3);

///iii.)
let div= document.createElement('div');
div.style.border='black solid 2px';
div.style.backgroundColor='pink';
body2.appendChild(div);
div.style.display='flex';
div.style.justifyContent='center';

let h1= document.createElement('h1');
h1.innerText= "I'm in a div";
div.append(h1);

let p3= document.createElement('p');
p3.innerText= "ME TOO!!!";
// div.append(p3);
div.insertAdjacentElement('beforeend',p3);