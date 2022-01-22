import React , {useState} from 'react'
import Axios from 'axios'

export const CreateCharView = () => {

    const [health, setHealth] = useState()
    const [strength, setStrength] = useState()

    const username = localStorage.getItem('username')

    const createCharacter = () => {
        Axios.get(`http://localhost:3001/searchuser?username=${username}`, {
        })
        .then((response) => {
            Axios.post(`http://localhost:3001/char/${response.data[0]._id}`, {
                health: health,
                strength: strength,
            })
        })
    }

    return (
        <div>
                <span>Health:  </span><input onChange={(event => setHealth(event.target.value))}></input> <br/>
                <span>Strength:  </span><input onChange={(event => setStrength(event.target.value))}></input> <br/>
                <button onClick={() => createCharacter()}>Skapa char</button>
        </div>
    )
}