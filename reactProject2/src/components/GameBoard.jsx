

function GameBoard(props) {
    const { player, keyChange} = props;

    return (
        <div key={keyChange}>
            <p>Active: {player.active}</p>      
            <p>Player: {player.name}</p>
            <p>Number: {player.number}</p>
            <p>Steps: {player.steps}</p>
            <p>Score: {player.scores.map((playerScore, i) => (<span key={i}>{playerScore}, </span>))}</p>
           
        </div>
    )
}

export default GameBoard;