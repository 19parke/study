import { useState } from 'react'
import Chip from './Chip';

export default function Language(props){

    const isWrongGuessCount = props.wrongGuessCount !== 0
    
    var languageChips = props.chips.map((chip, idx) => {
        
        var classNameString = ''
        if(isWrongGuessCount){
            if(idx <= (props.wrongGuessCount-1)){
                classNameString = 'lost'
            }
        }

        return  <Chip 
            name={chip.name} 
            backColor={chip.backgroundColor} 
            color={chip.color}
            key={chip.name}
            className={classNameString}
        />
    })


    return (
        <section className='language-chips'>
            {languageChips}
        </section>
    )
}