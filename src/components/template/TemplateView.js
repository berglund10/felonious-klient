import React from 'react'
import './TemplateView.css'
import { Navbar } from '../navbar/Navbar'
import { Profile } from '../profile/Profile'
import { HomeView} from '../../view/HomeView'

export const TemplateView = () => {
    return (
        <div class="container">
            <div class="header"><Navbar/></div>
            <div class="menu1">LEFTMENU
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </div>
            <div class="content"><br/><HomeView/></div>
            <div class="menu2">
                <Profile/>
            </div>
        </div>
    )
}