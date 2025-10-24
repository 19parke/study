//-------- React.Children 
// import { useState } from 'react'
// import Menu from "./Menu/Menu";
// import MenuButton from "./Menu/MenuButton";
// import MenuDropdown from "./Menu/MenuDropdown";
// import MenuItem from "./Menu/MenuItem";

// function App() {

//   const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]

//   return (
//     <>
//       <Menu>
//         <MenuButton>Sports</MenuButton>
//         <MenuDropdown>
//           {sports.map((sport) => {
//             <MenuItem key={sport}>{sport}</MenuItem>
//           })}
//         </MenuDropdown>
//       </Menu>
//     </>
//   )
// }

// export default App
//-------- React.Children 




//-------- Context
import React from "react"
import Button from "./Button"
import Header from "./Header"

// DO NOT PUT it inside of App , 
const ThemeContext = React.createContext()

function App(){
  return (
    <ThemeContext.Provider value="light">
      <div className="container dark-theme">
        <Header/>
        <Button/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
export { ThemeContext }