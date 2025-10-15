import clsx from "clsx";

export default function Alphabet(props){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const keyboard = alphabet.split('').map(letter => {
        const isGuessed = props.guess.includes(letter)
        const isCorrect = isGuessed && props.currentWord.includes(letter)
        const isWrong = isGuessed && !props.currentWord.includes(letter)
        const className = clsx({
            correct: isCorrect, 
            wrong: isWrong
        })

        return <button 
                    onClick={() => props.addGuess(letter)}
                    key={letter}
                    className={className}
                >
            {letter}
        </button>
    })

    return (
        <section className="keyboard">
            {keyboard}
        </section>
    )
}
