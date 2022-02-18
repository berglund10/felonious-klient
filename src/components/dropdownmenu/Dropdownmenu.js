import React, { useState } from 'react';
import Axios from 'axios';

export const Dropdownmenu = () => {
    const [value, setValue] = useState(0);
    const username = localStorage.getItem('username')

    const knega = (rundor) => {
        Axios.put('http://localhost:3001/kneg', {
            username: username,
            rundor: rundor
        }).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <select onChange={(e) => setValue(e.target.value)}>
                <option value="0">0 rundor</option>
                <option value="10">10 rundor</option>
                <option value="25">25 rundor</option>
                <option value="50">50 rundor</option>
                <option value="100">100 rundor</option>
            </select>
            <br />
            <br />
            <button onClick={() => knega(value)}>Jobba</button>
        </div>
    )
}
