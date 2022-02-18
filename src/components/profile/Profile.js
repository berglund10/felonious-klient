import React, {useState, useEffect } from 'react'
import { Profilebar } from './Profilebar'
import lacan from '../../shared/images/lacan2.png'
import Axios from 'axios'

export const Profile = () => {


    const [character, setCharacter] = useState([])
    const username = localStorage.getItem('username')


    useEffect(() => {
        getUserInfo()
      },[])
    
    const getUserInfo = () => {
        Axios.get(`http://localhost:3001/userinfo/?username=${username}`, {
        }).then((response) => {
            if(response.data) {
                setCharacter(response.data)
            } 
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <img src={lacan} alt="Logo" width="130px" height="130px"/>
                {character.map(c => <p>Grad: 1 <br/> Namn: {c.name} <br/> KP: {c.health}/{c.health} <br/> Tid: {c.rundor} Rundor <br/>Mynt: {c.mynt}<br/> Form: 100% </p>)}
            <br/>
            <br/>
            <Profilebar/>
        </div>
    )
}