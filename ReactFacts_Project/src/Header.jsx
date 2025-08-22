import reactLogo from './assets/react-logo.png'

export default function Header(){
    return (
        <header className='react-header'>
            <img src={reactLogo} alt='React Logo' className='react-logo'/>
            <h1 className='react-header-text'>ReactFacts</h1>
        </header>
    )
}