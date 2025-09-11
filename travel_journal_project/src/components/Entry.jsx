import marker from '../assets/marker.png'

export default function Entry(){
    return (
        <div className="entry-japan">
            <div className="japan-photo">
                <img src=""/>
            </div>
            <div className="japan-text">
                <div>
                    <img src={marker} alt="marker"/>
                    <p>JAPAN</p>
                    <href>View on Google Maps</href>
                </div>
                <div>
                    <h1>Mount Fuji</h1>
                </div>
                <div>
                    <p>12 Jan, 2021 - 24 Jan, 2021</p>
                </div>
                <div>
                    <p>
                        Mount Fuji is the tallest mountain in Japan, standing at 3,776
                        meters (12,380 feet). Mount Fuji is the single most popular tourist
                        site in Japan, for both Japanese and foreign tourists.
                    </p>
                </div>
            </div>
        </div>
    )
}