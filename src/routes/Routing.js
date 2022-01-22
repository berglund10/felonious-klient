import React, {useContext, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoutingPath from './RoutingPath';
import { HomeView } from '../view/HomeView';
import { LoginView } from '../view/LoginView';
import { GameView } from '../view/GameView';
import { CommunityView } from '../view/CommunityView';
import { ProfileView } from '../view/ProfileView';
import { ProfileEgenskaper } from '../components/profile/ProfileEgenskaper';
import {UserContext} from '../shared/global/UserProvider'
import { CreateCharView } from '../view/CreateCharView';
import { CreateUserView } from '../view/CreateUserView';



export const Routing = (props) => {

    const [authUser, setAuthUser] = useContext(UserContext)

    const checkIfUserAuth = () => {
        setAuthUser(localStorage.getItem("username"))
    }

    const blockRouteIfAuth = (navigateToView) => {
        return (authUser) ? <HomeView/> : navigateToView
    }

    const blockRouteIfNotAuth = (navigateToView) => {
        return (!authUser) ? <LoginView/> : navigateToView
    }

    useEffect(() => {
        checkIfUserAuth()
    })
     

    return (
        <Router>
            {props.children}
            <Routes>
                <Route exact path={RoutingPath.gameView} element={<GameView/>}/>
                <Route exact path={RoutingPath.communityView} element={<CommunityView/>}/>
                <Route exact path={RoutingPath.createcharView} element={<CreateCharView/>}/>
                <Route exact path={RoutingPath.createuserView} element={<CreateUserView/>}/>
                <Route exact path={RoutingPath.profileView} element={blockRouteIfNotAuth(<ProfileView/>)}/>
                <Route exact path={RoutingPath.loginView} element={blockRouteIfAuth(<LoginView/>)}/>
                <Route exact path={'/profileEgenskaper'} element={<ProfileEgenskaper/>}/>
                <Route path={RoutingPath.homeView} element={<HomeView/>}/>
            </Routes>
        </Router>
    )
}

