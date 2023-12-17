
function Scores(props) {
    const { player, players } = props;
    const playersArray = players;
    let playerIndex=playersArray.indexOf(player);
    if (player.active == "Win") {
        let localStoragePlayers = JSON.parse(localStorage.getItem('players'));
        if (playersArray[playerIndex].lastScore !== player.steps) {
            playersArray[playerIndex].lastScore = player.steps;
            playersArray[playerIndex].scores.push(player.steps);
            localStoragePlayers.forEach((localStoragePlayer) => {
                if (localStoragePlayer.name == player.name) {
                    localStoragePlayers[localStoragePlayers.indexOf(localStoragePlayer)].scores.push(player.steps);
                    localStorage.setItem('players', JSON.stringify(localStoragePlayers));
                }
            })
        }
    }
    return (
        <></>
    );
}
export default Scores;