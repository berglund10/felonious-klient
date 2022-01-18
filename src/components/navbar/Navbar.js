/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navbar.css';
import {useNavigate} from 'react-router-dom';
import RoutingPath from '../../routes/RoutingPath';

export const Navbar = () => {

    const history = useNavigate();

    return(
        <div className="navbarWrapper">
        <a onClick={() => history(RoutingPath.homeView)} >Home</a>
        <a onClick={() => history(RoutingPath.communityView)} >Community</a>
        <a onClick={() => history(RoutingPath.gameView)} >Game</a>
        <a onClick={() => history(RoutingPath.profileView)} >Profile</a>
         </div>
    )
}
