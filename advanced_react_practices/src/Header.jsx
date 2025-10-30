import React from "react"
import { ThemeContext } from "./App"

export default function Header(){
    const {theme} = React.useContext(ThemeContext);
    return (
        <header className={`${theme}-theme`}>
            <h1>{theme[0].toUpperCase() + theme.slice(1)} theme</h1>
        </header>
    )
}