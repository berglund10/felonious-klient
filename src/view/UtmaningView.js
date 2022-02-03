import React, {useEffect, useState}  from 'react'
import {useLocation} from 'react-router-dom';
import Axios from 'axios'
import { WinView } from './WinView';

export const UtamingView = () => {

    const username = localStorage.getItem('username')

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
    const [character, setCharacter] = useState([])
    const [bestar,setBestar] = useState([])

    useEffect(() => {
        getOneBest()
        getUserInfo()
      },[]);

    const utmanaBest = () => {
        return (character[0].strength > bestar[0].strength)
        ? console.log("du vann")
        : console.log("du förlorade")
    }

    const getOneBest = () => {
        Axios.get(`http://localhost:3001/best?name=${location.state.name}`, {
        }).then((response) => {
            setBestar(response.data.rows)
        }).catch(error => {
            console.log(error)
        })
    }
    const location = useLocation()

    return(
        <div>Här utmanar du en best {location.state.name}
        <ul>
            {bestar.map(b => <li> Name: {b.name} Health: {b.health} Strength: {b.strength}</li>)}
        </ul>
        <br/>
        <br/>
        <button onClick={() => {utmanaBest()}}>Utmana</button>
        </div>
    )
}