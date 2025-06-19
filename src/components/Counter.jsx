import React from 'react'
import { useState } from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => 
    {
        count!==0 ? setCount(count - 1): setCount(0);
    }

  const reset = () => setCount(0);
  
    return (
    <div>     
        <h1 style={{color:count>=10 ? 'red':'black'}}>Counter: {count}</h1>
       <div style={{display:'flex', gap:'10px', justifyContent:'center'}}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
       </div>
    </div>
  )
}

export default Counter 