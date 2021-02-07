import React from 'react';
import { ChannelContext, UserContext } from "../../Pages/UseContextComp";

const CompC = () => {
    return (
        <div>
            Component C
            <UserContext.Consumer>
                {
                    user => {
                        return(
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return <div>User Context value: {user} <b>{channel}</b></div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default CompC
