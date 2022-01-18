import React from 'react';
import './Header.css'

export const Header = (props) => {
    return (
        <div>
            <h1 className="title">
             {props.name}
             {props.age}
            </h1>
        </div>
    )
}