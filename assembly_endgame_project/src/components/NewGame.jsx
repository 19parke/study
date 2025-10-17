export default function NewGame(props){

    return (
        <button 
            className="new-game" 
            style={props.isGameOver ? {display: 'block'} : {display : 'none'}}
            onClick={props.newGame}
        >New Game
        
        </button>
    )
}