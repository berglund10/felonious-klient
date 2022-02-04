/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {useNavigate} from 'react-router-dom';
import RoutingPath from '../../routes/RoutingPath';

export const Arenanbar = () => {

    const history = useNavigate();

    return(
        <div>
        <li className='profilelink' onClick={() => history(RoutingPath.profileView)} >Lagspel</li>
        <li className='profilelink' onClick={() => history(RoutingPath.knegView)} >Kneg</li>
        <li className='profilelink' onClick={() => history(RoutingPath.gameView)} > Turneringar</li>
        <li className='profilelink' onClick={() => history(RoutingPath.createcharView)} >Utmaningar</li>
        <li className='profilelink' onClick={() => history(RoutingPath.bestarView)} >   Bestar</li>
        <br/>
         </div>
    )
}
