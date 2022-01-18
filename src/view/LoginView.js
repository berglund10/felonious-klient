import React, {useState, useContext} from 'react'
import { UserContext } from '../shared/global/UserProvider'


export const LoginView = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [authUser, setAuthUser] = useContext(UserContext)

    const login = () => {
        setAuthUser(username)
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