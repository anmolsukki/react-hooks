import React, { useContext } from 'react';
import { ChannelContext, UserContext } from "../../Pages/UseContextComp";
import CompC from "./CompC";

const CompB = () => {
    const user = useContext(UserContext)
    const surname = useContext(ChannelContext)

    return (
        <div>
            <p>Component B</p>
            <b>{user}</b> {surname} <br/>
            <CompC />
        </div>
    )
}

export default CompB
