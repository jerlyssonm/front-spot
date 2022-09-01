import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Card } from './component/CardSpot'
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
                {spots.map((spot) => <Card children={spot} />)}
            </div>
            <div className='page-btn'>
                <a href="">Voltar</a>
                <a href="">Avançar</a>
            </div>
        </main>
    )
}