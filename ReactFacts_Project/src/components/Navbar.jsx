import reactLogo from '../assets/reactjs-icon.png'

export default function Navbar(){
    return (
        <header className='react-header'>
            <nav className='react-nav'>
                <img src={reactLogo} alt='React Logo' className='react-logo'/>
                <h1 className='react-header-text'>ReactFacts</h1>
            </nav>
        </header>
    )
}