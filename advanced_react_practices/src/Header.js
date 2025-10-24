import React from "react"
import { ThemeContext } from "./App"

export default function Header(){
    const value = React.useContext(ThemeContext);
    
    return (
        <header className="dark-theme">
            <h1>Dark theme</h1>
        </header>
    )
}