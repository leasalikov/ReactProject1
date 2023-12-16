
function Scores(props) {
    const { player, players } = props;
    const playersArray = players;
    if (player.active == "Win") {
        let localStoragePlayers = JSON.parse(localStorage.getItem('players'));
        console.log(playersArray[playersArray.indexOf(player)]);
        if (playersArray[playersArray.indexOf(player)].lastScore !== player.steps) {
            console.log(playersArray[playersArray.indexOf(player)]);
            playersArray[playersArray.indexOf(player)].lastScore = player.steps;
            playersArray[playersArray.indexOf(player)].scores.push(player.steps);
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