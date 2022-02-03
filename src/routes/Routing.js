import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoutingPath from './RoutingPath';
import { HomeView } from '../view/HomeView';
import { LoginView } from '../view/LoginView';
import { GameView } from '../view/GameView';
import { ProfileEgenskaper } from '../components/profile/ProfileEgenskaper';
import { UserContext } from '../shared/global/UserProvider'
import { CreateCharView } from '../view/CreateCharView';
import { CreateUserView } from '../view/CreateUserView';
import { TemplateView } from '../components/template/TemplateView';
import { BestarView } from '../view/BestarView';
import { UtamingView } from '../view/UtmaningView';
import { WinView } from '../view/WinView';



export const Routing = (props) => {

    const [authUser, setAuthUser] = useContext(UserContext)

    const checkIfUserAuth = () => {
        setAuthUser(localStorage.getItem("username"))
    }

    const blockRouteIfAuth = (navigateToView) => {
        return (authUser) ? <TemplateView><HomeView /></TemplateView> : navigateToView
    }

    const blockRouteIfNotAuth = (navigateToView) => {
        return (!authUser) ? <LoginView /> : navigateToView
    }

    const navigateToView = (navigateToView) => {
        return <TemplateView>{navigateToView}</TemplateView>
    }

    useEffect(() => {
        checkIfUserAuth()
    })


    return (
        <Router>
            {props.children}
            <Routes>
                <Route path={RoutingPath.homeView} element={navigateToView(<HomeView/>)} />
                <Route path={RoutingPath.loginView} element={blockRouteIfAuth(navigateToView(<LoginView />))} />
                <Route path={RoutingPath.gameView} element={navigateToView(<GameView />)}/>
                <Route path={RoutingPath.createcharView} element={navigateToView(<CreateCharView />)} />
                <Route path={RoutingPath.createuserView} element={navigateToView(<CreateUserView />)} />
                <Route path={'/profileEgenskaper'} element={navigateToView(<ProfileEgenskaper />)} />
                <Route path={RoutingPath.bestarView} element={navigateToView(<BestarView />)} />
                <Route path={RoutingPath.utmaningView} element={navigateToView(<UtamingView />)} />
                <Route path={RoutingPath.winView} element={navigateToView(<WinView />)} />
            </Routes>
        </Router>
    )
}

