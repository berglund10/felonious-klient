import React, {useState, useContext} from 'react'
import { UserContext } from '../shared/global/UserProvider'
import {resolvePath, useNavigate} from 'react-router-dom'
import Axios from 'axios'


export const LoginView = () => {

    const loginUser = () => {
        Axios.post('http://localhost:3001/login', {
            username: username,
            password: password
        })
        .then((response) => {
            console.log(response)
            if(response.data.username === username && response.data.password === password) {
                (response.data.character === undefined) 
                ? login('/createchar')
                : login('/community')
            }         
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

    const login = (navigateToView) => {
        setAuthUser(username)
        localStorage.setItem("username", username)
        localStorage.setItem("password", password)
        history(navigateToView)
    }


    return (
        <div>
                <span>Username:  </span><input onChange={(event => setUsername(event.target.value))}></input> <br/>
                <span>Password:  </span><input type="password"onChange={(event => setPassword(event.target.value))}></input> <br/>
                <button onClick={() => loginUser()}>Logga in</button>
                <br/>
                <br/>
                <button onClick={() => history('/createuser')}>Skapa konto</button>
        </div>
    )
}