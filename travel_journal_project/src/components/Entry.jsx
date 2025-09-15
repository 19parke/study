import marker from '../assets/marker.png'
// import mountfuji from '../assets/MountFuji.png'


export default function Entry(props){
    return (
        <div className="entry-japan">
            <div className="japan-photo">
                {/* <img src={mountfuji}/> */}
                <img className="main-image" src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="japan-text">
                <div className='japan-place'>
                    <img src={marker} alt="marker"/>
                    <span>
                        <p>{props.country}</p>
                    </span>
                    <a href={props.googleMapsLink}>View on Google Maps</a>
                </div>
                <div className='japan-site'>
                    <h1>{props.title}</h1>
                </div>
                <div className='japan-date'>
                    <p>{props.dates}</p>
                </div>
                <div className='japan-explain'>
                    <p>
                        {/* {props.place.text} */}
                        {props.text}
                    </p>
                </div>
            </div>
        </div>
    )
}