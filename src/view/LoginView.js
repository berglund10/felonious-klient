import React, {useState, useContext} from 'react'
import { UserContext } from '../shared/global/UserProvider'
import {useNavigate} from 'react-router-dom'


export const LoginView = () => {

    const history = useNavigate()

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [authUser, setAuthUser] = useContext(UserContext)

    const login = () => {
        setAuthUser(username)
        localStorage.setItem("username", username)
        history('/community')
    }


    return (
        <div>
                <span>Username:  </span><input onChange={(event => setUsername(event.target.value))}></input> <br/>
                <span>Password:  </span><input type="password"onChange={(event => setPassword(event.target.value))}></input> <br/>
                <button onClick={() => login()}>Login {password}</button>
                <button onClick={() => alert(authUser)}>Show auth user</button>
        </div>
    )
}