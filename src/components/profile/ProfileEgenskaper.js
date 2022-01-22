import React, { useState } from 'react'
import Axios from 'axios'

export const ProfileEgenskaper = () => {


    const [health, setHealth] = useState()
    const [strength, setStrength] = useState()
    const username = localStorage.getItem('username')
    
    const getUserInfo = () => {
        Axios.get(`http://localhost:3001/searchuser?username=${username}`)
        .then((response) => {
            getCharInfo(response.data[0].character)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const getCharInfo = (character_id) => {
        Axios.get(`http://localhost:3001/char/${character_id}`).then((res) => {
            setHealth(res.data.health)
            setStrength(res.data.strength)
        })
    }



    // hämta charID sen hämta information om den och visa här
    return(
        <div>
            Detta är dina egenskaper:
            <button onClick={() => getUserInfo()}>Hämta info</button>
            <br/>
            <br/>
            Hälsa: {health}
            <br/>
            Uttålighet:
            <br/>
            Stryka: {strength}
            <br/>
            Karisma:
            <br/>
            Undvika anfall:

        </div>
    )
}