import marker from '../assets/marker.png'
import mountfuji from '../assets/MountFuji.png'

export default function Entry(){
    return (
        <div className="entry-japan">
            <div className="japan-photo">
                {/* <img src={mountfuji}/> */}
                <img className="main-image" src="https://scrimba.com/links/travel-journal-japan-image-url" alt="mount fuji" />
            </div>
            <div className="japan-text">
                <div className='japan-place'>
                    <img src={marker} alt="marker"/>
                    <span>
                        <p>JAPAN</p>
                    </span>
                    <a href='https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu'>View on Google Maps</a>
                </div>
                <div className='japan-site'>
                    <h1>Mount Fuji</h1>
                </div>
                <div className='japan-date'>
                    <p>12 Jan, 2021 - 24 Jan, 2021</p>
                </div>
                <div className='japan-explain'>
                    <p>
                        Mount Fuji is the tallest mountain in Japan, standing at 3,776<br/>
                        meters (12,380 feet). Mount Fuji is the single most popular tourist<br/>
                        site in Japan, for both Japanese and foreign tourists.
                    </p>
                </div>
            </div>
        </div>
    )
}