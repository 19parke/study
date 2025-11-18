import React from "react"
import clsx from "clsx"
import { Link } from "react-router-dom"

export default function Vans(){

    const [vans, setVans] = React.useState([])

    React.useEffect(()=>{
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map((van) => {

        const className = clsx({
            simple: van.type.includes('simple'), 
            luxury: van.type.includes('luxury'), 
            rugged: van.type.includes('rugged')
        })

        return (
            <div key={van.id} className="vanElement">
                <Link to={`/vans/${van.id}`}>
                    <img src={van.imageUrl}></img>
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        <div className="price-sec">
                            <span className="price">${van.price}</span><br/>
                            <span className="per">/day</span>
                        </div>
                    </div>
                    <button className={className}>{van.type.charAt(0).toUpperCase()+van.type.slice(1)}</button>
                </Link>
            </div>
        )

    })

    return (
        <>
            <div className="vans-header">
                <h1>Explore our van options</h1>
                <div className="filter-buttons">
                    <button>Simple</button>
                    <button>Luxury</button>
                    <button>Rugged</button>
                    <a>Clear filters</a>
                </div>
            </div>
            <div className="vansElement">
                {vanElements}
            </div>
        </>
    )
}