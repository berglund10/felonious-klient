import React, {useState} from 'react';
import Axios from 'axios'

export const CreateUserView = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const createUser = () => {
            Axios.post('http://localhost:3001/user', {
                username: username,
                password: password
            })
            .then(() => {
                console.log("Användaren har skapats")
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