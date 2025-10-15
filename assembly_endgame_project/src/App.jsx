import './App.css'
import Alphabet from './components/Alphabet'
import Header from './components/Header'
import Language from './components/Language'
import NewGame from './components/NewGame'
import Status from './components/Status'
import Word from './components/Word'
import { useState } from 'react'

function AssemblyEndgame() {

  const [currentWord, setCurrentWord] = useState('react');
  const [guess, setGuess] = useState([])

  // currentWord 에 있는 알파벳을 inlcudes 로 guess 에 있는 알파벳과 비교해서 false 가 나올 때 마다 wrongGuessCount 증가하기 
  // addGuess 에다가 넣어야 될 수도? 
  
  var wrongGuessCount = guess.length

  var wordList = currentWord.split('').map((letter, index) => {

    const isGuessed = guess.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)

    return <div className="letter" key={index}>
            <span style={isCorrect ? {display:'block'} : {display:'none'}}>{letter}</span>
          </div>
  })
  
  function addGuess(letter){
    setGuess(prevGuess =>
      prevGuess.includes(letter) ? prevGuess : [...prevGuess, letter]
    )
    console.log(wrongGuessCount)
    console.log(guess)
  }


  return (
    <>
      <Header/>
      <Status/>
      <Language/>
      <Word wordList={wordList}/>
      <Alphabet addGuess={addGuess} guess={guess} currentWord={currentWord}/>
      <NewGame/>
    </>
  )
}

export default AssemblyEndgame
