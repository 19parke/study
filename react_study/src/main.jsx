// import { Fragment } from 'react'
// import reactLogo from './assets/react-logo.png'
// import './index.css'

import { createRoot } from 'react-dom/client'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

const root = createRoot(document.getElementById("root"))

function Page(){
  return (
    <>
      <Header/>
      <MainContent/>
      <Footer/>
    </>
  )
}

root.render(
  <Page />
)


// function Page(){
//   return (
    // <Fragment>
    // <>
      {/* <header>
          <img src={reactLogo} alt='react-logo' width='40px'/>
      </header>
      <main>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
      <li>New project</li>
      <li>Always love learning new things</li>
      <li>When I dont feel like doing work, I can still Study</li>
      </ol>
      </main>
      <footer>
      © 2025 Park development. All rights reserved.
      </footer> */}
    // </>
    // </Fragment> /*doesnt insert another nested level like */
//   )
// }

// function Header(){
//   return (
//     <header className='header'>
//           <img src={reactLogo} alt='react-logo' className='react-img'/>
//           <nav>
//             <ul className='nav-list'>
//               <li className='nav-list-item'>Pricing</li>
//               <li className='nav-list-item'>About</li>
//               <li className='nav-list-item'>Contact</li>
//             </ul>
//           </nav>
//     </header>
//   )
// }

// function MainContent(){
//   return (
//     <main>
//       <h1>Reasons I'm excited to learn React</h1>
//       <ol className='order-list'>
//         <li>New project</li>
//         <li>Always love learning new things</li>
//         <li>When I dont feel like doing work, I can still Study</li>
//       </ol>
//     </main>
//   )
// }

// function Footer(){
//   return (
//     <footer className='react-footer'>
//       © 2025 Park development. All rights reserved.
//     </footer>
//   )
// }

