import React from "react"
import { useParams } from "react-router-dom"

export default function VanDetail() {

    const params = useParams()
    const [vanData, setVanData] = React.useState({})

    React.useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then((res) => res.json())
        .then((data) => setVanData(data.vans))
    }, [params.id])

    console.log(vanData)

    return (
        <>
            {vanData ? 
                <>
                    <div className="back">
                        <a>Back to all vans</a>
                    </div>
                    <div className="vanDetail">
                        <img src={vanData.imageUrl}/>
                        <div className="detail-content-wrapper">
                            <button className="typebutton">{vanData.type.charAt(0).toUpperCase()+vanData.type.slice(1)}</button>
                            <h1>{vanData.name}</h1> 
                            <span className="price-detail">${vanData.price}</span><span className="per-detail">/day</span>
                            <p>{vanData.description}</p>
                            <button className="rent-button">Rent this van</button>
                        </div>
                    </div>
                </> : 
                <h1>Loading...</h1>
            }
        </>
    )
}