import React, { useState } from 'react'

function Counter() {
    let [count, setCount] = useState(1);
    // let [multiply, setmultiply] = useState(100);

    function CountUp() {
        setCount(count + 1)
        if (count >= 20) {
            setCount(20);
        }
    }
    function CountDown() {
        setCount(count - 1)
        if (count <= 1) {
            setCount(0);
        }
    }
    return (
        <>
            <div className="number">
                <h1>{count}</h1>
            </div>
            <div className="btns">
                <button onClick={CountDown} className="dec_btn">-</button>
                <button onClick={CountUp} className="inc_btn">+</button>
                <h2 className="price">100</h2>
                {/* <h2 className="price">{multiply}</h2> */}
            </div>
        </>
    )
}

export default Counter;