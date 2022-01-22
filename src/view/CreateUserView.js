import React, {useState} from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const CreateUserView = () => {

    const history = useNavigate()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const createUser = () => {
            Axios.post('http://localhost:3001/user', {
                username: username,
                password: password
            })
            .then(() => {
                console.log("Användaren har skapats")
                history('/game')
            })
    }

    return (
        <div>
            <span>Username:  </span><input onChange={(event => setUsername(event.target.value))}></input> <br />
            <span>Password:  </span><input type="password" onChange={(event => setPassword(event.target.value))}></input> <br />
            <button onClick={() => createUser()}>Skapa konto</button>
        </div>
    )
}