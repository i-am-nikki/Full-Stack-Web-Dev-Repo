function doSomething(){
    console.log("button was clicked!");
}

function handleHover(){
    console.log("Hovered!!")
}

export default function button(){
    return (
    <div>
        <button onClick={doSomething}>Click Me</button>
        <button onMouseOver={handleHover}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquam voluptate dolore, est autem tempore deleniti quasi molestias accusantium quos qui eveniet facere velit magni, cumque fuga ex quaerat quae.</button>
    </div>
    )
}