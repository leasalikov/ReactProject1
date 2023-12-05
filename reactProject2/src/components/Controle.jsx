import { useState } from "react";
import GameBoard from "./GameBoard"
import LogIn from "./LogIn"
import RandNumber from "./RandNunber";

const Controle = () => {

    const [gameActive, setGameActive] = useState(false);
    const [players, setPlayers] = useState([]);


    if (gameActive) {
        return (
            <>
                {players.map((player, i) => <RandNumber key={i} player={player} setPlayers={setPlayers} players={players} />)}
                {players.map((player, i) => <GameBoard key={i} player={player} />)}

            </>
        );

    }

    return (<LogIn startGame={setGameActive} players={players} setPlayers={setPlayers} />);
}

export default Controle;