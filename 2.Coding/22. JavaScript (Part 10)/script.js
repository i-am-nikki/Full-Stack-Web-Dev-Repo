let btns = document.querySelectorAll('button');
// btn.onclick = function() {
//     console.log("btn was clicked.");
// };

for (btn of btns) {
    // btn.onclick = sayHello; //no need of adding () coz if we will add that means 
    //we r executing that function here directly.
    //So, we r just assigning the name to onclick function not the function directly.

    // btn.onmouseenter = function(){
    //     console.log("you hover over a button");
    // }

    btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayMyName);
    btn.addEventListener("dblclick", sayMyName);
    btn.addEventListener('click', changeColor);
}

function sayHello() {
    console.log("Hello JavaScript DOM!!");
};

function sayMyName() {
    console.log("Nikki Malik");
};

function changeColor() {
    console.dir(this); //this will refer to element that triggered this function.
    console.dir(this.innerText);
    this.style.color = "maroon";
    //SEE LINE 18 and 36.. 
}
let p = document.querySelector('p');
p.addEventListener('click', changeColor);
p.addEventListener('click', function (event) {
    console.dir(event);
})

let input = document.querySelector('input');
// input.addEventListener("keydown", function(e){
//     console.log("key -", e.key);
//     console.log("code -", e.code);
// });

// input.addEventListener("keyup" , function(e){
//     console.log("key is released");
// })

input.addEventListener("keydown", function (e) {
    if (e.code == "ArrowUp" || e.code == "KeyU") {
        console.log("Character moves forward.");
    } else if (e.code == "ArrowDown" || e.code == "KeyD") {
        console.log("Character moves backward.");
    } else if (e.code == "ArrowLeft" || e.code == "KeyL") {
        console.log("Character moves Left.");
    } else if (e.code == "ArrowRight" || e.code == "KeyR") {
        console.log("Character moves Right.");
    }
});

let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("form is submitted.");
    // let inp= document.querySelector('.text2');
    let inp = this.elements[0];
    console.log(inp.value);

})

let inp = document.querySelector(".text2");
inp.addEventListener("change", function () {
    console.log(this.value);
});

inp.addEventListener("input", function () {
    console.log(this.value);
    p.innerText = this.value;
});