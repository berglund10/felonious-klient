import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useNavigate} from 'react-router-dom'

export const ProfileEgenskaper = () => {

    useEffect(() => {
        getUserInfo()
      },[]);

    const checkIfCharacterExist = () => {
        return (character[0] === undefined) 
        ? <button onClick={() => deleteChar()}>Skapa char</button>
        : <button onClick={() => deleteChar()}>Ta bort char</button>
    }

    const history = useNavigate()
    const [character, setCharacter] = useState([])
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

    const deleteChar = () => {
        Axios.put(`http://localhost:3001/users`, {
            username: username
        }).then(() => {
            history('/createchar')
        })
    }

    return (
        <div>
            Detta är dina egenskaper:
            <br />
            <ul>
                {character.map(c => <li> Health: {c.health} Strength: {c.strength} Name: {c.name} Rundor: {c.rundor} Mynt: {c.mynt}</li>)}
            </ul>
            <br />
            <div>{checkIfCharacterExist()}</div>
        </div>
    )
}