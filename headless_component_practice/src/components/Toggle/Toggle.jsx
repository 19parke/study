import React from "react"

const ToggleContext = React.createContext()

// no operation () => {}
export default function Toggle({children, onToggle = () => {}}){

    const [on, setOn] = React.useState(false)
    const firstRender = React.useRef(true)

    function toggle(){
        setOn(prevState => !prevState);
    }

    React.useEffect(()=>{
        if(firstRender.current){
            firstRender.current = false
        }else{
            onToggle()
        }
    }, [on])

    return (
        <ToggleContext.Provider value={{on, toggle}}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext }