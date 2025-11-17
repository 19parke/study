import './App.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <BrowserRouter>
      <header>
        <Link to="/" className='vanlife-logo'>#VANLIFE</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <footer>
        <span>Ⓒ 2022 #VANLIFE</span>
      </footer>
    </BrowserRouter>
  )
}

export default App
