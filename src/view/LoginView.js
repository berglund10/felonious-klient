import React, {useState, useContext} from 'react'
import { UserContext } from '../shared/global/UserProvider'
import {useNavigate} from 'react-router-dom'
import Axios from 'axios'
import RoutingPath from '../routes/RoutingPath'


export const LoginView = () => {

    const loginUser = () => {
        Axios.post('http://localhost:3001/login', {
            username: username,
            password: password
        })
        .then((response) => {
            (response.data.character === undefined) 
            ? history(RoutingPath.createcharView)
            : login()
            
        })
        .catch((error) => {
            console.log(error)
            alert("användaren finns inte i db")
        })
    }


    const history = useNavigate()

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [authUser, setAuthUser] = useContext(UserContext)

    const login = () => {
        setAuthUser(username)
        localStorage.setItem("username", username)
        history('/community')
        // Kolla ifall användaren har en character, om inte gå till sida för att skapa en.
    }


    return (
        <div>
                <span>Username:  </span><input onChange={(event => setUsername(event.target.value))}></input> <br/>
                <span>Password:  </span><input type="password"onChange={(event => setPassword(event.target.value))}></input> <br/>
                <button onClick={() => loginUser()}>Logga in</button>
        </div>
    )
}