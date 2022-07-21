import React from 'react'
import Counter from './Counter'
import Counter2 from './Counter2'
import { useState } from 'react'
const ManageFunction = () => {
    const [count, setCount] = useState({count1 :0, count2:0})
    const handleMouse = (params) => {
        if (params == "counter1") {
            setCount({...count, count1 : count.count1 + 1})
        }
        else {
            setCount({...count, count2 : count.count2 + 1})
        }
    }
    return (
        <div>
            <Counter func={handleMouse} count={count.count1}></Counter>
            <Counter2 func={handleMouse} count={count.count2}>No count Value : 0</Counter2>
           
        </div>
    )
}
export default ManageFunction
