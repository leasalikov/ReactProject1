
function ActivePlayer(props) {

    const { activePlayer, players, player } = props;


    const playersArray = players;
    let playerIndex = playersArray.indexOf(player);
    if (playerIndex == activePlayer) {
        if (player.number == 100) {
            playersArray[playerIndex].active = "Win";
        }
        else {
            playersArray[playerIndex].active = "true";
        }
    }
    else
        playersArray[playerIndex].active = "false";

    return (
        <p className={`${player.active}`}>Active: {player.active}</p>
    )

}
export default ActivePlayer;