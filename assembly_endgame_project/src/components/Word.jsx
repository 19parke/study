export default function Word(props){
    return (
        <section className="wordList">
            {props.wordList}
        </section>
    )
}

// For Accessability , Screen Readers
// const numGuessesLeft = languages.length-1;
// <section className="sr-only" aria-live="polite" role="status">
//     <p>
//         {currentWord.includes(lastGuessedLetter) ? 
//             `Correct! The letter ${lastGuessedLetter} is the word` : 
//             `Wrong! The letter ${lastGuessedLetter} is not eh word`
//         }
//         You have {numGuessesLeft} attempts left.
//     </p>
//     <p>
//         Current word: {currentWord.split("").map(letter => guess.inlcudes(letter) ? letter + "." : "blank.").join(" ")}
//     </p>
// </section>