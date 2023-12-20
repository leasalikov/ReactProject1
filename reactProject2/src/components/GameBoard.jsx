import './GameBoard.css'
function GameBoard(props) {

    const { player, keyChange } = props;


    return (
        <div className={`${player.active}`} key={keyChange}>
            <p>Player: {player.name}</p>
            <p>Number: {player.number}</p>
            <p>Steps: {player.steps}</p>
        </div>
    )

}
export default GameBoard;
