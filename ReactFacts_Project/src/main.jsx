import { createRoot } from 'react-dom/client'
import './index.css'
import reactLogo from './assets/react-logo.png'

createRoot(document.getElementById('root')).render(
  <div>
    <img src={reactLogo} alt='react-logo' width="50px" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first release in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 200K stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
)