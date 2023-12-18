import './GameBoard.css'
function Win(props) {

    const { players, player, setKeyChange, setActivePlayer, setGameActive } = props;
    const playersArray = players;
    let playerIndex = playersArray.indexOf(player);
    const NewGame = () => {
        playersArray[playerIndex] = { name: player.name, number: '', steps: 0, active: "false", scores: player.scores };
        setActivePlayer(prevActivePlayer => ((prevActivePlayer + 1 == players.length) ? 0 : ++prevActivePlayer));
        setKeyChange(prevKeyChange => (++prevKeyChange));
    }
    const Quit = () => {
        if (playersArray[playerIndex] == playersArray[playersArray.length - 1])
            setActivePlayer(0);
        playersArray.splice(playerIndex, 1);
        if (playersArray.length == 0)
            setGameActive(false);
        setKeyChange(prevKeyChange => (++prevKeyChange));
    }

    if (player.number == 100) {

        return (
            <>
                <p className="youWon">You Won!!!</p>
                <button onClick={NewGame}>New Game</button>
                <button onClick={Quit}>Quit</button>
            </>
        )
    }
    return (
        <></>
    )
}
export default Win;