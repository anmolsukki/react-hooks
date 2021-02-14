import React, { useReducer } from 'react';
import CompA from '../Components/useReducerUseContext/CompA';

const initialState = {
    firstCounter: 0
};
const reducer = (state, action) => {
    switch(action.type) {
        case "Increment":
            return {...state, firstCounter: state.firstCounter + action.value}
        case "Decrement":
            return {...state, firstCounter: state.firstCounter - action.value}
        case "Reset":
            return initialState
        default: return state
    }
}

export const CountContext = React.createContext()

const useReducerUseContext = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch}}>
            Count: {count.firstCounter}
            <CompA />
        </CountContext.Provider>
    )
}

export default useReducerUseContext
