import Toggle from "./components/Toggle/index"
import { BsStar, BsStarFill } from "react-icons/bs"
import useToggle from "./hooks/useToggle"

export default function Star({ onChange }){

    // [ Custom Hook ]
    const [on, toggle] = useToggle()

    return (
        // <Toggle onToggle={onChange}>
        //     <Toggle.Button>
        //         <Toggle.On>
        //             <BsStarFill className="star filled"/>
        //         </Toggle.On>
        //         <Toggle.Off>
        //             <BsStar className="star" />
        //         </Toggle.Off>
        //     </Toggle.Button>
        // </Toggle>

        //[ Custom Hook ]
        <>
            {
                on ? <BsStarFill  onClick={toggle} className="star filled"/> : 
                    <BsStar onClick={toggle} className="star" />
            }
        </>
    )
}