import React, {useContext} from 'react'
import { UserContext } from '../shared/global/UserProvider';
import { LoginView } from './LoginView';
import styled from 'styled-components';

export const HomeView = () => {

    const [authUser, setAuthUser] = useContext(UserContext);

    const displayUserIfAuth = () => {
        return (authUser) 
        ? <Paragraph>Välkommen {authUser}</Paragraph>
        : <LoginView/>
    }

    return(
        <div>
           {displayUserIfAuth()}
        </div>
    )
}

const Paragraph = styled.h1`
color: red;
`
