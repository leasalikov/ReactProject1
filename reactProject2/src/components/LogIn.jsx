import './Login.css'

function LogIn(props) {

    const { startGame, players, setPlayers } = props;


    const signUser = () => {
        let gamer = prompt("enter name:");
        if (players.every(obj => obj.name !== gamer)) {
            let localStoragePlayers = JSON.parse(localStorage.getItem('players'));
            if (localStoragePlayers == null) {
                localStoragePlayers = [];
                localStoragePlayers.push({ name: gamer, scores: [] });
                setPlayers(prevPlayers => [...prevPlayers, { name: gamer, number: '', steps: 0, active: "false", scores: [] }]);
            }
            else if (localStoragePlayers.every(obj => obj.name !== gamer)) {
                localStoragePlayers.push({ name: gamer, scores: [] });
                setPlayers(prevPlayers => [...prevPlayers, { name: gamer, number: '', steps: 0, active: "false", scores: [] }]);
            }
            else {
                localStoragePlayers.map((localStoragePlayer) => {
                    if (localStoragePlayer.name == gamer) {
                        setPlayers(prevPlayers => [...prevPlayers, { name: gamer, number: '', steps: 0, active: "false", scores: localStoragePlayer.scores }]);
                    }
                })
            }
            localStorage.setItem('players', JSON.stringify(localStoragePlayers));
        } else {
            alert("Player with the same name already exists");
        }
    }

    return (
        <>
            <h1>Get to 100!!!</h1>
            <h2>Enter to register players:</h2>
            <button onClick={signUser} className="logIn">👉</button>
            <br />
            <div className="input">
                {players.map((player, i) =>
                    <div key={i}>{player.name}</div>
                )}
            </div>
            <button className="logIn" onClick={() => { players[0] == null ? alert("There are no players!") : startGame(true) }}>start game</button>
        </>
    )

}
export default LogIn;