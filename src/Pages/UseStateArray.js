import React, { useState } from 'react';

const UseStateArray = () => {
    const [items, setItems] = useState([])

    const addItems = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10 ) + 1
        }])
    }

    return (
        <div>
            <button onClick={() => addItems()}>Add Itemd</button>
            <ul>
                {items.map(item => {
                    return(
                        <li style={{listStyle: "none"}} key={item.id}>{item.value}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default UseStateArray