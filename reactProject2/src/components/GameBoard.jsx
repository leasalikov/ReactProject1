

function GameBoard(props) {
    const { player, keyChange} = props;

    return (
        <div key={keyChange}>
            <p>Player: {player.name}</p>
            <p>Number: {player.number}</p>
            <p>Steps: {player.steps}</p>
            <p>Active: {player.active}</p>
        </div>
    )
}

export default GameBoard;