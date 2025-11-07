import React from "react"
import Toggle from "../Toggle"
import useToggle from "../../hooks/useToggle"


const MenuContext = React.createContext()

export default function Menu({children, onOpen}){

    // [Custom Hook]
    const [open, toggleOpen] = useToggle({onToggle : onOpen})

    return (
        // <Toggle onToggle={onOpen}>
        //     <div className="menu">
        //         {children}
        //     </div>
        // </Toggle>

        // [ Custom Hook ]
        <MenuContext.Provider value={{open, toggleOpen}}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export {MenuContext}