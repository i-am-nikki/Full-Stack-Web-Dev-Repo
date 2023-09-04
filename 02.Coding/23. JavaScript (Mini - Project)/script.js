let btn = document.querySelector('button');
let inp= document.querySelector('input');
let ul= document.querySelector('ul');

btn.addEventListener('click', function(){
    if(inp.value){
    let li = document.createElement('li');
    li.innerText=inp.value;
    
    let dltbtn= document.createElement('button');
    dltbtn.innerText= "Delete";
    dltbtn.classList.add('dltbtn');

    li.appendChild(dltbtn); 
    ul.appendChild(li);
    inp.value=''

}
});

ul.addEventListener('click', function(event){
    if(event.target.nodeName =="BUTTON"){
        let liItem= event.target.parentElement;
        liItem.remove();
    }
})

//This code won't work so above we used event delegation or bubbling method to acheive
//the desired result.....................................

// let dltbtns = document.querySelectorAll('.dltbtn');
// for (dltbtn of dltbtns){
//     dltbtn.addEventListener('click', function(){
//         let par= this.parentElement;
//         par.remove();
//     })
// }


