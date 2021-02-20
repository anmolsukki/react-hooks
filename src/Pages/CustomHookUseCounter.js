import React from 'react';
import useCounter from "../Components/CustomHooks/CustomUseCounterComp";

const CustomHookUseCounter = () => {
    const [count, increment, decrement, reset] = useCounter(10, 2)
    
    return (
        <div>
            <h2>Count - {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CustomHookUseCounter;
