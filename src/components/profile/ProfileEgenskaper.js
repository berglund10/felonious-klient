import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useNavigate} from 'react-router-dom'

export const ProfileEgenskaper = () => {

    useEffect(() => {
        getUserInfo()
      });


    const history = useNavigate()
    const [health, setHealth] = useState()
    const [strength, setStrength] = useState()
    const [rundor, setRundor] = useState()
    const [mynt, setMynt] = useState()
    const username = localStorage.getItem('username')

    const getUserInfo = () => {
        Axios.get(`http://localhost:3001/userinfo/?username=${username}`, {
        }).then((response) => {
            if(response.data[0].health) {
                setHealth(response.data[0].health)
                setStrength(response.data[0].strength)
                setRundor(response.data[0].rundor)
                setMynt(response.data[0].mynt)
            } 
        }).catch((error) => {
            console.log(error)
        })
    }

    const deleteChar = () => {
        Axios.put(`http://localhost:3001/users`, {
            username: username
        }).then(() => {
            history('/home')
        })
    }



    // hämta charID sen hämta information om den och visa här
    return (
        <div>
            Detta är dina egenskaper:
            <button onClick={() => getUserInfo()}>Hämta info</button>
            <br />
            <br />
            <br />
            Hälsa: {health}
            <br />
            Rundor: {rundor}
            <br />
            Stryka: {strength}
            <br />
            Mynt: {mynt}
            <br />
            <br />
            <button onClick={() => deleteChar()}>Ta bort char</button>
        </div>
    )
}