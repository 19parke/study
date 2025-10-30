import React from "react"

const MenuContext = React.createContext();

export default function Menu({children}){
    const [open, setOpen] = React.useState(true)

    function toggle(){
        setOpen(prevOpen => !prevOpen)
    }


    return (
        <MenuContext.Provider value={false}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}