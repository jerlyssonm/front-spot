import { useEffect, useState } from 'react'
import api from '../../services/api'
import './index.css'


export function Home() {
    const [spots, setSpots] = useState([])
    useEffect(()=> {
        api.get("/").then((res) => {
            console.log(res)
            setSpots(res.data)})
        .catch((err) => {
            console.error("errous"+ err)
        })
    }, [])
    return (
        <main className='home-box'>
            <h1>Inicio</h1>
            <div className='form-home'>
                <input type="text" placeholder='Buscar ponto por algum termo'/>
                <input type="submit" value="Buscar!"/>
            </div>
            <div className='spot-box'>
                    <div className='spot'>
                        <h3>{spots[0].name}</h3>
                        <p>{spots[0].city} - {spots[0].state}</p>
                        <button>Ver  detalhes</button>
                    </div>
            </div>
        </main>
    )
}