import facebook from '../assets/Facebook Icon.png'
import twitter from '../assets/Twitter Icon.png'
import instagram from '../assets/Instagram Icon.png'
import github from '../assets/GitHub Icon.png'

export default function Footer(){
    return (
       <footer className='footer-body'>
            <img src={twitter}/>
            <img src={facebook}/>
            <img src={instagram}/>
            <img src={github}/>
       </footer>
    )
}