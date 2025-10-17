import clsx from "clsx"

export default function Status(props){

    const className = clsx({
        'game-status': true, 
        'won': props.isGameWon, 
        'lost': props.isGameLost,
        'lose': !props.isGameLost && props.isWrong 
    })
    // clsx 는 className 을 위해 만들어짐. 작동은 하나 알맞은 작동법은 아님
    const topText = props.isGameWon ? 'You win!' : props.isGameLost ? 'Game over!' : props.isWrong ? `"${props.fareWellMessage}"` : ''
    const bottomText = props.isGameWon ? 'Well done! 🎉' : props.isGameLost ? 'You lose! Better start learning Assembly 😭' : ''
    
    return (
        <section aria-live="polite" role="status" className={className}>
            <span className={!props.isGameLost && props.isWrong ? 'farewellmessage' : ''}>{topText}</span><br/>
            <p>{bottomText}</p>
        </section>
    )
}