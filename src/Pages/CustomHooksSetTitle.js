import React, { useState } from 'react';
import CustomHooksDocTitle from "../Components/CustomHooks/CustomHooksDocTitle";

const CustomHooksSetTitle = () => {
    const [count, setCount] = useState(0)

    CustomHooksDocTitle(count)
    
    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}

export default CustomHooksSetTitle;
