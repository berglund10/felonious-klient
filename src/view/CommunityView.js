import React from 'react';
import Axios from 'axios'

export const CommunityView = () => {

    const fetchDataFromBackend = () => {
        Axios.get('http://localhost:3001/user')
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <button onClick={() => fetchDataFromBackend()}>Testar backend</button>
            <h1>Forum</h1>
        </div>
    )
}