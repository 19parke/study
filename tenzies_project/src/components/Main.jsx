import Die from './Die'
import { useState, useRef, useEffect } from 'react'
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'

export default function Main(){


    // lazy state init
    const [values, setValues] = useState(() => generateAllNewDice());

    const focusButton = useRef(null);

    // var isTrue = 0;
    // values.forEach(die => die.isHeld ? isTrue++ : isTrue)
    // if(isTrue === 10){
    //     const sameVal = values[0].value
    //     var isSame = 0;
    //     values.forEach(die => die.value === sameVal ? isSame++ : isSame)
    //     if(isSame === 10){
    //         console.log("Game won!")
    //     }
    // }

    useEffect(() => {
        if(gameWon){
            focusButton.current.focus()
        }
    }, [gameWon])

    var gameWon =  values.every(die => die.isHeld) && values.every(die => die.value === values[0].value)

    function generateAllNewDice(){
        return new Array(10)
        .fill(0)
        .map(() => ({
            value:Math.ceil(Math.random() * 6),
            isHeld: false, 
            id: nanoid()
        }))
        // const diceValues = Array.from({length: 10}, (val, idx) => ({
        //     id: idx, 
        //     value: Math.floor(Math.random() * 6)+1, 
        //     isHeld: false
        // }))

        // return diceValues
    }

    var diceValues = values.map(dieObj => {
        return <Die 
                    key={dieObj.id} 
                    value={dieObj.value} 
                    isHeld={dieObj.isHeld} 
                    hold={hold} 
                    id={dieObj.id}
                    // hold={() => (hold(dieObj.id))}
                />
    })

    function rollDice(){
        if(gameWon){
            setValues(() => generateAllNewDice())
        }else{
            setValues(prevVal => 
                prevVal.map(die => 
                    !die.isHeld ? {...die, value: Math.ceil(Math.random() * 6)} : die
                )
            );
        }
    }

    function hold(id){
        setValues(prevVal => (
           prevVal.map(die => 
            die.id === id ? {...die, isHeld: !die.isHeld} : die
           )
        ))
    }

    return (
        <main className="mainboard">
            {gameWon && <Confetti/>}
            <div aria-live='polite' className='sr-only'>
                {gameWon && <p>Congratulations! You won! Pres "New Game" to start again.</p>}
            </div>
            <span className='header'>
                <h1 className="title">Tenzies</h1>
                <p className="instructions">Roll until all dice are the same. <br/>Click each die to freeze it at its current value between rolls.</p>
            </span>
            <div className="container">
                {diceValues}
            </div>
            <button onClick={rollDice} ref={focusButton}>{gameWon ? 'New Game' : 'Roll'}</button>
        </main>
    )
}