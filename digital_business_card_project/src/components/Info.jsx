import mail from '../assets/Mail.png'
import photograph from '../assets/photograph.png'
import linkedin from '../assets/linkedin.png'

export default function Info(){
    return(
        <div className='info-body'>
            <div>
                <img src={photograph} alt="photo" className='photograph'/>
            </div>
            <h1 className='name'> Grace Park</h1>
            <h1 className='job'>Frontend Developer</h1>
            <h1 className='website'>gracepark.website</h1>
            <div className='button-group'>
                <div className='button1'>
                    <button className='email-button'>
                        <img src={mail} alt="email-icon"/>
                        <span>Email</span>
                    </button>
                </div>
                <div className='button2'>
                    <button className='linkedin-button'>
                        <img src={linkedin} alt="linked-in-icon"/>
                        <span>LinkedIn</span>
                    </button>
                </div>
            </div>
        </div>
    )
}