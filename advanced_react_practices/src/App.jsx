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
  const [theme, setTheme] = React.useState("light")

  function toggleTheme(){
    setTheme((prevTheme) => {
      if(prevTheme === "light"){
        return "dark"
      }else{
        return "light"
      }
    })
  }

  return (
    // 첫 {} 은 Javascript Land 으로 오게끔 하는 장치 , 두번째 {}은 object 전달
    // 혹은 value={{theme: theme , toggleTheme: toggleTheme}} >> 그러나 ES6 덕분에 밑에와 같이 전달 가능
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className={`container ${theme}-theme`}>
        <Header/>
        <Button/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
export { ThemeContext }
//-------- Context



//-------- Context
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
//-------- Context
