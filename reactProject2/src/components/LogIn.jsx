
import { useState } from "react";


function LogIn(props) {

    const { startGame, players, setPlayers } = props;
    // const [players, setPlayers] = useState([{ name: "" }]);

    const signUser = () => {
        let gamer = prompt("enter name:");

        if (players.every(obj => obj.name !== gamer)) {
            setPlayers(prevPlayers => [...prevPlayers, { name: gamer, number:'',steps:0, active:false}]);
            let localStoragePlayers = JSON.parse(localStorage.getItem('players'));
            if (localStoragePlayers == null)
                localStoragePlayers = [];
            localStoragePlayers.push(gamer);
            localStorage.setItem('players', JSON.stringify(localStoragePlayers));
        } else {
            alert("Player with the same name already exists");
        }
    }
    return (
        <>
            <h1>Get to 100!!!</h1>
            <h2>Enter to register players</h2>
            <button onClick={signUser} >😊</button>
            <br />
            {players.map((player, i) =>
                <div key={i}>{player.name}</div>
            )}
            <button onClick={() => {players[0]==null? alert("There are no players!"):startGame(true) }}>start game</button>
        </>
    )
}
export default LogIn;