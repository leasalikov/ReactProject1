
function TopPlayers(props) {
    let sum = 0;
    let winers = [];
    let minAverage;
    let localStoragePlayers = JSON.parse(localStorage.getItem('players'));

    for (let index = 0; index < 3; index++) {
        let firstIndex = 0;
        while (firstIndex < localStoragePlayers.length && localStoragePlayers[firstIndex].scores.length == 0) {
            firstIndex++;
        }
        let winnerIndex = firstIndex;
        if (firstIndex < localStoragePlayers.length) {
            localStoragePlayers[firstIndex].scores.forEach(score => { sum += score; });
            minAverage = sum / localStoragePlayers[firstIndex].scores.length;
            winers[index] = localStoragePlayers[firstIndex];
            localStoragePlayers.forEach((player) => {
                let myIndex = localStoragePlayers.indexOf(player)
                sum = 0;
                if (player.scores.length !== 0) {
                    player.scores.forEach(score => {
                        sum += score;
                    });
                    localStoragePlayers[myIndex].average = sum / player.scores.length;
                    if (player.average < minAverage) {
                        minAverage = player.average;
                        winers[index] = player;
                        winnerIndex = myIndex;
                    }
                }
            })
            localStoragePlayers.splice(winnerIndex, 1);
        }
        else
            break;
    }

    return (
        <div key={props.keyChange} className="topPlayers">
            <p>Top players:</p>
            {winers.map((winer, i) => (
                <p key={i}> name: {winer.name}, average: {winer.average}</p>
            ))}
        </div>
    )

}
export default TopPlayers;