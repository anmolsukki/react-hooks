import React from 'react';
import CompA from "../Components/UseContextComp/CompA";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const UseContextComp = () => {
    return (
        <div>
            <UserContext.Provider value={"Anmol"}>
                <ChannelContext.Provider value={"Singh"}>
                    <CompA />
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default UseContextComp;

