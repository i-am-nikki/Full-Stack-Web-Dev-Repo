let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let h1 = document.querySelector('h1');
    let randomColor = getRandomColor();
    h1.innerText = randomColor;
    h1.style.backgroundClip = "text";
    h1.style.color = "transparent";
    h1.style.webkitBackgroundClip = "text";
    h1.style.backgroundImage = randomColor;

    let div = document.querySelector('div');
    div.style.background = randomColor;
    div.innerHTML = `<b>Click Again to Discover More Awesomeness! </b>`;


    btn.style.background = randomColor;

})

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `linear-gradient(to top right, rgb(${red}, ${green}, ${blue}), rgb(${green}, ${blue}, ${red})`;
    return color;
}