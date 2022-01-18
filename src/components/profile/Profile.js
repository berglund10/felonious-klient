import React, { useContext } from 'react'
import { UserContext } from '../../shared/global/UserProvider'
import { Profilebar } from './Profilebar'

export const Profile = () => {
    const [authUser, setAuthUser] = useContext(UserContext)
    return (
        <div>
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