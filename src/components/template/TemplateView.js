import React from 'react'
import './TemplateView.css'
import { Navbar } from '../navbar/Navbar'
import { Profile } from '../profile/Profile'
import logo from '../../shared/images/bakgrund.png'
import { Arenanbar } from '../arenan/Arenanbar'

export const TemplateView = (props) => {
    return (
        <div>
            <img src={logo} alt="Logo" />
            <div className="container">
                <div className="header"><Navbar /></div>
                <div className="menu1"><Arenanbar/>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </div>
                <div className="content"><br />{props.children}</div>
                <div className="menu2">
                    <Profile />
                </div>
            </div>
        </div>
    )
}