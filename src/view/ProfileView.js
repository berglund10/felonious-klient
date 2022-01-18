import React, { useContext } from 'react';
import { UserContext } from '../shared/global/UserProvider';
import { Profile } from '../components/profile/Profile';

export const ProfileView = () => {

    const [authUser, setAuthUser] = useContext(UserContext);

    const displayUserIfAuth = () => {
        return (authUser) 
        ? <div><h1>Användare: {authUser}</h1><h3>Egenskaper</h3><Profile/></div>
        : <h3>Du måste vara inloggad för att få mer information</h3>
    }

    return (
        <div>
            {displayUserIfAuth()}
        </div>
    )
}