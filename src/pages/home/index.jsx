import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Card } from './component/CardSpot'
import './index.css'


export function Home() {
    const [start, setStart] = useState(0)
    const [page, setPage] = useState(`?skip=${start}`)
    const [spots, setSpots] = useState([])

    const Comsumer = (e)=> {
        const query = e.target.elements.query.value
        e.preventDefault()
        console.log(query)
/*         api.get(`/`).then((res) => {
            console.log(res.data)
            setSpots(res.data)})
        .catch((err) => {
            console.error("errous"+ err)
        }) */
    }
 /*    const Paginate = (num) => {
        api.get(`?skip=${num}`).then((res) => {
            console.log(res.data)
            setSpots([])
            setSpots(res.data)})
            setStart(start+num)
        .catch((err) => {
            console.error("errous"+ err)
        })
    } */
    useEffect(()=>{
        console.log(page)
        const fetch = async () => {
            const result = await api.get(`?skip=${start}`)
                .then(res => res.data)
            setSpots(result)
        }
        fetch()
    },[start,])
    return (
        <main className='home-box'>
            <h1>Inicio</h1>
            <form className='form-home' onSubmit={Comsumer}>
                <input type="text" name="query" placeholder='Buscar ponto por algum termo'/>
                <input type="submit" value="Buscar!"/>
            </form>
            {
                (spots.length == 0) ? '' :
                <>
                <div className='spot-box'>
                        {spots.map((spot) => <Card children={spot} key={`${spot.id}`} />)}
                </div>
                {(spots.length >= 5) ?
                    <div className='page-btn'>
                        <button onClick={()=>setStart(start-5)} >Voltar</button>
                        <button onClick={()=>setStart(start+5)} >Avançar</button>
                    </div> : ''}
                </>
            }
        </main>
    )
}