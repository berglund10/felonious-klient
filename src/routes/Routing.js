import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoutingPath from './RoutingPath';
import { HomeView } from '../view/HomeView';
import { LoginView } from '../view/LoginView';
import { GameView } from '../view/GameView';
import { CommunityView } from '../view/CommunityView';
import { ProfileView } from '../view/ProfileView';
 

export const Routing = (props) => {
    return (
        <Router>
            {props.children}
            <Routes>
                <Route exact path={RoutingPath.gameView} element={<GameView/>}/>
                <Route exact path={RoutingPath.communityView} element={<CommunityView/>}/>
                <Route exact path={RoutingPath.profileView} element={<ProfileView/>}/>
                <Route exact path={RoutingPath.loginView} element={<LoginView/>}/>
                <Route path={RoutingPath.homeView} element={<HomeView/>}/>
            </Routes>
        </Router>
    )
}

