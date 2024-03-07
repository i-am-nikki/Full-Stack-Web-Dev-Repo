import { useEffect, useState } from "react";

export default function Counter() {
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    const incCountx = () => {
        setCountx((currCount) => currCount +1);
    };

    const incCounty = () => {
        setCounty((currCount) => currCount +1);
    };

    useEffect(function sideEffect() {
        console.log("this is the side effect");
    }, []);

    return (
        <div>
            <h2>Countx = {countx}</h2>
            <button onClick={incCountx}>+1</button>
            <h2>County = {county}</h2>
            <button onClick={incCounty}>+1</button>
        </div>
    );
}