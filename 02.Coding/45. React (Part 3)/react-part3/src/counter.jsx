import { useState } from "react";

function init(){
    return Math.random();
}

export default function Counter(){
    let [count, setCount] = useState(init);

    // function incCount(){
    //     setCount(count+1);
    //     // console.log(count);
    // }

    let incCount = () => {
        setCount((currCount) =>{
            return currCount+1;
        });
        setCount((currCount) =>{
            return currCount+1;
        });
        // setCount(25);
    };

    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}