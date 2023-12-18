import './GameBoard.css'
function GameBoard(props) {
    const { player, keyChange } = props;
    // let activeClass = "";
    // if (player.active == "true" || player.active == "Win")
    //     activeClass = "active";
    return (
        <div className={`${player.active}`} key={keyChange}>
            <p>Active: {player.active}</p>
            <p>Player: {player.name}</p>
            <p>Number: {player.number}</p>
            <p>Steps: {player.steps}</p>
            <p>Score: {player.scores.map((playerScore, i) => (<span key={i}>{playerScore}, </span>))}</p>     
        </div>
    )
}

export default GameBoard;
