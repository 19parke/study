import React from "react"
import Button from "../Button/Button"
import Toggle from "../Toggle/index"
import { MenuContext } from "./Menu"

export default function MenuButton({children}){

    const {toggleOpen} = React.useContext(MenuContext)

    return (
        // <Toggle.Button>
        //     <Button>{children}</Button>
        // </Toggle.Button>

        // [ Custom Hook ]
        <Button onClick={toggleOpen}>{children}</Button>
    )
}