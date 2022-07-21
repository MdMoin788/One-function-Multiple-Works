import React from 'react'
const Counter = ({ func, count }) => {

    return (
        <div>
            <h2 style={{ background: "yellow" }}> count : {count}</h2>
            <button onClick={() => func("counter1")}>Icrease1</button>
        </div>
    )
}
export default Counter
