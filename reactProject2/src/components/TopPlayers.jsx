
function TopPlayers(props) {
    
    let min = 1898;
    let winer;
    let localStoragePlayers = JSON.parse(localStorage.getItem('players'));
    localStoragePlayers.forEach((player) => {
        let sum = 0;
        player.scores.forEach(score => {
            sum += score;
        });
        let average = sum / player.scores.length;
        if (average < min) {
            min = average;
            winer = player;
        }
    })

    return (
        <div key={props.keyChange}>
        <p>1. name: {winer.name}, average: {winer.average}</p>
        <p></p>
        </div>
    )
}
export default TopPlayers;