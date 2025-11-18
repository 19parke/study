import React from "react"
import useEffectOnUpdate from "./useEffectOnUpdate";

export default function useToggle({initalValue = false, onToggle = ()=>{}}){
    const [on, setOn] = React.useState(initalValue)
    useEffectOnUpdate(onToggle, [on])

    function toggle(){
        setOn(prevState => !prevState);
    }

    return [on, toggle]
}