import React, { useContext } from 'react'
import { UserContext } from '../../shared/global/UserProvider'

export const Profile = () => {
    const [authUser, setAuthUser] = useContext(UserContext)
    return (
        <div>
        <span>
            {authUser}
        </span>
        </div>
    )
}