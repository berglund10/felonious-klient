import React, { useContext } from 'react'
import { UserContext } from '../../shared/global/UserProvider'
import { Profilebar } from './Profilebar'
import lacan from '../../shared/images/lacan2.png'

export const Profile = () => {
    
    const [authUser, setAuthUser] = useContext(UserContext)
    return (
        <div>
            <img src={lacan} alt="Logo" width="130px" height="130px"/>;
            <br/>
            Namn: {authUser}
            <br/>
            Grad: 10
            <br/>
            KP: 89/89
            <br/>
            EP: (881) 3921
            <br/>
            Tid: 120 rundor
            <br/>
            Mynt: 479
            <br/>
            Form: 100%
            <br/>
            <br/>
            <Profilebar/>
        </div>
    )
}