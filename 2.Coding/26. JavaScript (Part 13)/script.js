/*
let btn = document.querySelector('button');

btn.addEventListener('click', async ()=>{
    let fact = await getFacts();

    let p = document.querySelector('#res');
    p.innerText = fact;
})

let url = "https://catfact.ninja/fact";

async function getFacts(){
    let res= await axios.get(url);
    return res.data.fact;
}
*/

/*
let dogAPIURL ="https://dog.ceo/api/breeds/image/random";

let btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', async() =>{
    let link = await dogPics();
    let img = document.querySelector('img');
    img.setAttribute("src", link);
    
})
async function dogPics(){
    let pics = await axios.get(dogAPIURL);
    return pics.data.message;
}
*/

//Sending Headers with API Requests
/*
let jokesAPI = "https://icanhazdadjoke.com/";

async function getHeaders(){
    const passHeaders = {headers: { Accept: "application/json"}};
    let res = await axios.get(jokesAPI, passHeaders);
    console.log(res.data);
}

getHeaders();
*/

let url = "http://universities.hipolabs.com/search?name=India";

let btn = document.querySelector("#clgs-btn");
btn.addEventListener('click', async ()=>{
    // let country = document.querySelector('input').value;


    // Get the value of the input field (state)
    let state = document.querySelector('input').value;
    // console.log(country);
    console.log(state);

    // let clgsArr = await getUniversity(country);

    // Fetch all universities from the API
    let clgsArr = await getUniversity();
    // Filter universities by the provided state
    let filteredClgsArr = clgsArr.filter(clgs => clgs['state-province'] === state);

    // Display the filtered universities
    console.log(filteredClgsArr);
    Show(filteredClgsArr);
    // console.log(clgsArr);

    // Show(clgsArr);

})

function Show(clgsArr){
    let list = document.querySelector("#clgs-lists");
    list.innerText="";
    for (clgs of clgsArr) {
        console.log(clgs.name);
        
        let li= document.createElement("li");
        li.innerText = clgs.name;
        li.style.color = "white";
        list.appendChild(li);
    }
}

async function getUniversity(){
    try{
        // let res = await axios.get(url+country);
        let res = await axios.get(url);
        return res.data;
    }
    catch(err){
        console.log("Error - ", err);
        return [];
    }
}
