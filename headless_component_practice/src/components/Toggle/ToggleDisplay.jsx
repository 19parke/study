import React from "react"
import Toggle, { ToggleContext } from "./Toggle"

export default function ToggleDisplay({children}){
    
    const { on } = React.useContext(ToggleContext)

    return children(on)
}