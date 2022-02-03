import React from 'react'
import {useLocation} from 'react-router-dom';

export const WinView = () => {

    const location = useLocation()

    return(
        <div>
            
            <h1>Du {location.state.status} utmaningen</h1>
        </div>
    )
}