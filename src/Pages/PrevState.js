import React, { useState } from 'react';

const PrevState = () => {
    const [count, setCount] = useState(0)

    const incrementFive = () => {
        for(let i=0; i<5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            Count: {count}&nbsp;&nbsp;&nbsp;
            <button onClick={() => setCount(0)}>Reset</button>&nbsp;
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>&nbsp;
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Deccrement</button>&nbsp;
            <button onClick={() => incrementFive()}>Increment 5</button>
        </div>
    )
}

export default PrevState;
