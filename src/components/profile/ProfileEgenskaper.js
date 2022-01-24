import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export const ProfileEgenskaper = () => {


    const [health, setHealth] = useState()
    const [strength, setStrength] = useState()
    const [rundor, setRundor] = useState()
    const [character_id, setCharacter_id] = useState()
    const username = localStorage.getItem('username')

    const MINUTE_MS = 10000;

    useEffect(() => {
        getUserInfo()
        const interval = setInterval(() => {
            updateRundor()
        }, MINUTE_MS);

        return () => clearInterval(interval);
    }, [rundor])

    const updateRundor = () => {
        getUserInfo()
        Axios.put(`http://localhost:3001/char/${character_id}`).then(() => {
            console.log("Rundor uppdaterade")
        })
    }

    const getUserInfo = () => {
        Axios.get(`http://localhost:3001/searchuser?username=${username}`)
            .then((response) => {
                setCharacter_id(response.data[0].character)
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
            setRundor(res.data.rundor)
        })
    }



    // hämta charID sen hämta information om den och visa här
    return (
        <div>
            Detta är dina egenskaper:
            <button onClick={() => getUserInfo()}>Hämta info</button>
            <br />
            <button onClick={() => updateRundor()}>Update rundor</button>
            <br />
            Hälsa: {health}
            <br />
            Rundor: {rundor}
            <br />
            Stryka: {strength}
            <br />

        </div>
    )
}