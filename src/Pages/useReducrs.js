import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
        case "Increment":
            return state + 1
        case "Decrement":
            return state - 1
        case "Reset":
            return initialState
        default: return state
    }
}

const useReducrs = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch("Increment")}>Increment</button>
            <button onClick={() => dispatch("Decrement")}>Decrement</button>
            <button onClick={() => dispatch("Reset")}>Reset</button>
        </div>
    )
}

export default useReducrs
