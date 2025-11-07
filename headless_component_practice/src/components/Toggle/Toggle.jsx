import React from "react"
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate"
import useToggle from "../../hooks/useToggle"

const ToggleContext = React.createContext()

// no operation () => {}
export default function Toggle({children, onToggle = () => {}}){

    // const [on, setOn] = React.useState(false)
    // const firstRender = React.useRef(true)

    // function toggle(){
    //     setOn(prevState => !prevState);
    // }

    // 처음 실행하자마자 누르지도 않았는데 실행되므로 , 첫 자동 실행 방지 위해
    // React.useEffect(()=>{
    //     if(firstRender.current){
    //         firstRender.current = false
    //     }else{
    //         onToggle()
    //     }
    // }, [on])
    
    // [Custom Hook]
    const [on, toggle] = useToggle()
    useEffectOnUpdate(onToggle, [on])

    return (
        <ToggleContext.Provider value={{on, toggle}}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext }