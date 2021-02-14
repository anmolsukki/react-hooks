import React, { useContext } from 'react';
import { CountContext } from "../../Pages/useReducerUseContext";

const CompA = () => {
    const countContetx = useContext(CountContext)
    
    return (
        <div>
            <button onClick={() => countContetx.countDispatch({type: "Increment", value: 1})}>Increment</button>
            <button onClick={() => countContetx.countDispatch({type: "Decrement", value: 1 })}>Decrement</button>
            <button onClick={() => countContetx.countDispatch({type: "Reset"})}>Reset</button>
        </div>
    )
}

export default CompA
