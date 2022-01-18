import React, {useContext} from 'react'
import { UserContext } from '../shared/global/UserProvider';
import { LoginView } from './LoginView';

export const HomeView = () => {

    const [authUser, setAuthUser] = useContext(UserContext);

    const displayUserIfAuth = () => {
        return (authUser) 
        ? <h1>Välkommen {authUser}</h1>
        : <LoginView/>
    }

    return(
        <div>
           {displayUserIfAuth()}
        </div>
    )
}