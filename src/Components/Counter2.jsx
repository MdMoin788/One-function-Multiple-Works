import React from 'react'
const Counter2 = ({func, count, children}) => {
 
    return (
        <div>
            <h2  style={{background:"yellow"}}> count : {count ? count : children}</h2>
            <button onClick={()=>func("counter2")}>Icrease2</button>
        </div>
    )
}
export default Counter2
