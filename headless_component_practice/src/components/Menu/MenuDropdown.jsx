import React from "react"
import Toggle from "../Toggle/index"
import { MenuContext } from "./Menu"

export default function MenuDropdown({children}){

    const {open} = React.useContext(MenuContext)

    return (
        // <Toggle.On>
        //     <div className="menu-dropdown">
        //         {children}
        //     </div>
        // </Toggle.On>

        // [ Custom Hook ]
        open ? 
        <div className="menu-dropdown">
            {children}
        </div> : 
        null
    )
}