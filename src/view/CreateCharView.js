import React, { useState, useContext } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../shared/global/UserProvider'

export const CreateCharView = () => {

    const [health, setHealth] = useState()
    const [strength, setStrength] = useState()
    const [name, setName] = useState()
    const history = useNavigate()

    const [authUser, setAuthUser] = useContext(UserContext);


    const displayUserIfAuth = () => {
        return (authUser)
            ? <div><span>Name:  </span><input onChange={(event => setName(event.target.value))}></input> <br />
                <span>Health:  </span><input onChange={(event => setHealth(event.target.value))}></input> <br />
                <span>Strength:  </span><input onChange={(event => setStrength(event.target.value))}></input> <br />
                <button onClick={() => createChar()}>Skapa char</button></div>
            : <h3>Du måste vara inloggad för att få mer information</h3>
    }

    const username = localStorage.getItem('username')

    const createChar = () => {
        Axios.post(`http://localhost:3001/createchar`, {
            name: name,
            health: health,
            strength: strength,
            rundor: 125,
            mynt: 100
        }).then((response) => {
            Axios.put(`http://localhost:3001/createchar`, {
                username: username,
                character_id: response.data.rows[0].character_id
            })
        }).then(() => {
            history('/game')
        })
    }

    return (
        <div>
            {displayUserIfAuth()}
        </div>
    )
}