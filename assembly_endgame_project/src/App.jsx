import './App.css'
import { languages } from './languages'
import Alphabet from './components/Alphabet'
import Header from './components/Header'
import Language from './components/Language'
import NewGame from './components/NewGame'
import Status from './components/Status'
import Word from './components/Word'
import { useState } from 'react'
import { getFarewellText , chooseRandomWord } from './utils'
import clsx from 'clsx'
import Confetti from "react-confetti"

function AssemblyEndgame() {

  const [currentWord, setCurrentWord] = useState(chooseRandomWord());
  const [guess, setGuess] = useState([])
  const [chips, setChips] = useState(languages);


  var isWrong = false;
  // var wrongGuessCount = guess.length
  var wrongGuessCount = guess.filter((letter) => {
    !currentWord.includes(letter) ? isWrong = true : isWrong = false
    return !currentWord.includes(letter)
  }).length

  var isGameOver = false;
  const isGameWon = currentWord.split("").every(letter => guess.includes(letter))
  const isGameLost = wrongGuessCount == (chips.length-1)

  var wordList = currentWord.split('').map((letter, index) => {

    const isGuessed = guess.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)

    return <div className="letter" key={index}>
            <span style={isCorrect ? {display:'block'} : isWrong && isGameLost ? {display: 'block'} : {display: 'none'}}
                  className={clsx({
                    '': isCorrect, 
                    'reveal' : isWrong && isGameLost,
                    'correctletter' : isCorrect && isGameLost
                  })}
            >{letter}</span>
          </div>
  })

  function addGuess(letter){
    setGuess(prevGuess =>
      prevGuess.includes(letter) ? prevGuess : [...prevGuess, letter]
    )
    // wrongGuessCount = guess.length
    // guess.forEach((letter) => {
    //   const isGuessed = guess.includes(letter)
    //   const isCorrect = isGuessed && currentWord.includes(letter)
    //   if(isCorrect){
    //     wrongGuessCount -= 1
    //   }
    // })
  }

  if(isGameLost||isGameWon){
    isGameOver = true
  }

  if(wrongGuessCount > 0){
    var fareWellMessage = getFarewellText(chips[wrongGuessCount-1].name)
  }

  function newGame(){
    setCurrentWord(chooseRandomWord());
    setChips(languages)
    setGuess([])
  }

  return (
    <>
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000}/>}
      <Header/>
      <Status isGameLost={isGameLost} isGameWon={isGameWon} fareWellMessage={fareWellMessage} isWrong={isWrong}/>
      <Language wrongGuessCount={wrongGuessCount} chips={chips}/>
      <Word isGameLost={isGameLost} wordList={wordList}/>
      <Alphabet addGuess={addGuess} guess={guess} currentWord={currentWord} isGameOver={isGameOver}/>
      <NewGame isGameOver={isGameOver} newGame={newGame}/>
    </>
  )
}

export default AssemblyEndgame
