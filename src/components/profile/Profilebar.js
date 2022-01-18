/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {useNavigate} from 'react-router-dom';
import RoutingPath from '../../routes/RoutingPath';
import { ProfileEgenskaper } from './ProfileEgenskaper';
import { HomeView } from '../../view/HomeView';

export const Profilebar = () => {

    const history = useNavigate();

    return(
        <div>
        <li className='profilelink' onClick={() => history(RoutingPath.profileView)} >Info</li>
        <li className='profilelink' onClick={() => history(RoutingPath.profileView)} >Biografi</li>
        <li className='profilelink' onClick={() => history(RoutingPath.gameView)} >Egenskaper</li>
        <li className='profilelink' onClick={() => history(RoutingPath.profileView)} >Historia</li>
        <li className='profilelink' onClick={() => history(RoutingPath.profileView)} >Statistik</li>
        <li className='profilelink' onClick={() => history(RoutingPath.profileView)} >Utrustning</li>
         </div>
    )
}
