for(let i=1; i<=10; i++){
    console.log(i);
}
//console.log(i);//Error- will not access i coz if var is declare in for loop, it is limited till loop only!
let i=10
console.log("In backward loop-------------------------------------")
for(i; i>=1; i-=3){
    console.log(i);
}
console.log(i);// will print -2 coz we have declared var i outside of for loop

//print odd num from 1 to 15;
console.log("print odd num--------------------------------------");
for(num=1; num<=15; num=num+2){
    console.log(num);
}

//print even num from 2 to 20;
console.log("print even num--------------------------------------");
for(num=2; num<=20; num+=2){
    console.log(num);
}

//print multiplication table of 5
console.log("table of 5-------------------------------------------");
for(let table=5; table<=50; table+=5 ){
    console.log(table);
}   

//or

// let table= prompt("enter the table number which you want : "); //it store only strings, so we have to convert string into num;
// table=parseInt(table);
// console.log("table of: ", table, "-----------------------------------");
// for(let i=table; i<=table*10; i+=table){
//     console.log(i);
// }

//nested for loop.......................................................;
console.log("nested for loop...............................................>");
for(let i=1; i<=3; i++){
    console.log("outer: ", i)
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}

//while loop
console.log("while loop....................................")
let i1=0;
while(i1<=20){
    console.log(i1);
    i1=i1+2;
}

//Favorite Movie Activity............................................... 
/*let myFavMovie="SitaRamam";
let guessMovie= prompt("Guess my Fav Movie Name!");
while((myFavMovie!=guessMovie) && (guessMovie!="quit")){
    // console.log("wrong!");
    guessMovie= prompt("wrong guess, Please try again!--");
}

if(guessMovie==myFavMovie){
    console.log("Congrats!.");
} else{
    console.log("Ohhooo, you quitted!...")
}
*/
//break keyword............................................\
console.log("break keyword.......................")
let i2=1;
while(i2<=5){
    if(i2==3){
        break;
    }
    console.log(i2);
    i2++;
}
//loops with arra---------------------------------------------------
console.log("Loops with Arrays----------------------------");
let fruits= ["mango","apple","banana","litchi","orange"];
fruits.push("pineapple");
for(let i=fruits.length-1; i>=1; i--){
    console.log(i, fruits[i]);
}

//nested loop with nested arrays....................
console.log("nested loop with nested arrays.................");
let actors=[["ironman", "spiderman", "thor"] , ["superman","wonderwomen", "flash"]];
for(i=0; i<actors.length; i++){
    console.log(`List #${i}`);
    for(j=0; j<actors[i].length; j++){
        console.log(actors[i][j]);
    }
}

//for-of loop......................................
console.log("for-of loop.................... ");
let fruit=["mango","apple","banana","litchi","orange"];
for(fruit of fruits){
    console.log(fruit);
}

let str="Nikki";
for(char of str){
    console.log(char);
}

//nested for-of loop..............................
console.log("nested for-of loop..............");
let heroes=[["ironman","spiderman","thor"],["superman", "wonderwomen", "flash"]];

for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}

//todo app................................................
console.log("To do App.................................................");
let todo=[];
let req=prompt("Please enter your request");
console.log(req);

while(true){
    if(req=="quit"){
        console.log("you quitted");
        break;
    }
    if(req=="list"){
        console.log("------------------")
        for(let i=0; i<=todo.length-1; i++){
            console.log(i, todo[i]);
        }
        console.log("------------");
    } else if(req=="add"){
        let task= prompt("please enter the task you want to add: ");
        todo.push(task);
        console.log("task added successfully!!");
    } 
    else if(req=="delete"){
        let idx = prompt("Please enter item number to be deleted");
        todo.splice(idx, 1);
        console.log("task deleted successfully!!");
    } else{
        console.log("wrong request, try again!");
    }
    req=prompt("Please enter your request");
   
}