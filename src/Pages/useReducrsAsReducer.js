import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    SecondCounter: 10
};
const reducer = (state, action) => {
    switch(action.type) {
        case "Increment":
            return {...state, firstCounter: state.firstCounter + action.value}
        case "Decrement":
            return {...state, firstCounter: state.firstCounter - action.value}
            case "Increment2":
            return {...state, SecondCounter: state.SecondCounter + action.value}
        case "Decrement2":
            return {...state, SecondCounter: state.SecondCounter - action.value}
        case "Reset":
            return initialState
        default: return state
    }
}

const useReducrsAsReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>
            <p>First Counter: {count.firstCounter}</p>
            <p>Second Counter: {count.SecondCounter}</p>
            <button onClick={() => dispatch({type: "Increment", value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: "Decrement", value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({type: "Increment2", value: 5})}>Increment</button>
            <button onClick={() => dispatch({type: "Decrement2", value: 5 })}>Decrement</button>
            <button onClick={() => dispatch({type: "Reset"})}>Reset</button>
        </div>
        </div>
    )
}

export default useReducrsAsReducer
