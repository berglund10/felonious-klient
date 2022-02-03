import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { useNavigate} from 'react-router-dom'

export const BestarView = () => {


    const toUtamningView=(name)=>{
        history('/utmaning',{state:{name:name}});
          }

    const history = useNavigate()
    const [bestar,setBestar] = useState([])

    useEffect(() => {
        getBestar()
      },[]);


    const getBestar = () => {
        Axios.get('http://localhost:3001/bestar').then((response) => {
            setBestar(response.data)
        })
    }

    return(
        <div>
            <br/>
            <button onClick={() => toUtamningView()}>Till utamning</button>
            <br/>
            <ul>
                {bestar.map(b => <li>{b.name} Health: {b.health} Strength: {b.strength} <button onClick={() => toUtamningView(b.name)}>Utmana</button></li>)}
            </ul>

        Här möter du bestar</div>
    )
}