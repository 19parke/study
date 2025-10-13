import Die from './Die'
import { useState } from 'react'

export default function Main(){


    var randomNumbers = new Array(10);

    function generateAllNewDice(){
        return new Array(10).fill(0).map(() => Math.floor(Math.random() * 6) + 1)
    }

    const [values, setValues] = useState(generateAllNewDice());

    const diceValues = values.map((num) => {
        return <Die value={num}/>
    })


    return (
        <main className="mainboard">
            <div className="container">
                {diceValues}
            </div>
            <button>Roll</button>
        </main>
    )
}