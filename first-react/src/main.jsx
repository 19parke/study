// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import './index.css'
import { createRoot } from 'react-dom/client'

// const root = createRoot(document.getElementById("root"))
// const reactElement = <h1>Hello from JSX!</h1>

const root = createRoot(document.getElementById("root"))
const reactElement = <h1>Hello from JSX!</h1>

// console.log(reactElement)

root.render(reactElement)

