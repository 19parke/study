import { languages } from '../languages'
import { useState } from 'react'
import Chip from './Chip';

export default function Language(){
    const [chips, setChips] = useState(languages);

    var languageChips = chips.map(chip => 
        <Chip 
            name={chip.name} 
            backColor={chip.backgroundColor} 
            color={chip.color}
            key={chip.name}
            />
    )

    return (
        <section className='language-chips'>
            {languageChips}
        </section>
    )
}