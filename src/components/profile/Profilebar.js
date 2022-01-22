/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import RoutingPath from '../../routes/RoutingPath';
import { UserContext } from '../../shared/global/UserProvider';

export const Profilebar = () => {

    const [authUser, setAuthUser] = useContext(UserContext)
    const history = useNavigate();

    const logout = () => {
        localStorage.removeItem("username")
        setAuthUser(false)
    }

    return(
        <div>
        <li className='profilelink' onClick={() => history(RoutingPath.profileView)} >Info</li>
        <li className='profilelink' onClick={() => history(RoutingPath.profileView)} >Biografi</li>
        <li className='profilelink' onClick={() => history(RoutingPath.gameView)} >Egenskaper</li>
        <li className='profilelink' onClick={() => history(RoutingPath.createcharView)} >Historia</li>
        <li className='profilelink' onClick={() => history(RoutingPath.profileView)} >Statistik</li>
        <li className='profilelink' onClick={() => history(RoutingPath.profileView)} >Utrustning</li>
        <button onClick={() => logout()}>Logga ut</button>
         </div>
    )
}
