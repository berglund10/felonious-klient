/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import RoutingPath from '../../routes/RoutingPath';
import { UserContext } from '../../shared/global/UserProvider';

export const Arenanbar = () => {

    const [authUser, setAuthUser] = useContext(UserContext)
    const history = useNavigate();

    return(
        <div>
        <li className='profilelink' onClick={() => history(RoutingPath.profileView)} >Lagspel</li>
        <li className='profilelink' onClick={() => history(RoutingPath.profileView)} >Slumpduell</li>
        <li className='profilelink' onClick={() => history(RoutingPath.gameView)} > Turneringar</li>
        <li className='profilelink' onClick={() => history(RoutingPath.createcharView)} >Utmaningar</li>
        <li className='profilelink' onClick={() => history(RoutingPath.bestarView)} >   Bestar</li>
        <br/>
         </div>
    )
}
