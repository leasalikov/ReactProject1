import { useState } from "react"
import GameBoard from "./GameBoard"
import LogIn from "./LogIn"
import Number from "./Number"
// import Steps from "./Steps"
import ActivePlayer from "./ActivePlayer"
import Win from "./Win"
import Scores from "./Scores"
import TopPlayers from "./TopPlayers"
import './GameBoard.css'

const Controle = () => {

    
    const [gameActive, setGameActive] = useState(false);
    const [players, setPlayers] = useState([]);
    const [activePlayer, setActivePlayer] = useState(0);
    const [keyChange, setKeyChange] = useState(0);


    function playOrWin(player) {
        if (player.number == 100)
            return <Win player={player} players={players} setPlayers={setPlayers} setKeyChange={setKeyChange} setActivePlayer={setActivePlayer} setGameActive={setGameActive} />
        return <Number player={player} players={players} setKeyChange={setKeyChange} setActivePlayer={setActivePlayer} />
    }

    if (gameActive) {
        return (
            <div>
                <TopPlayers keyChange={keyChange} />
                {players.map((player, i) => (
                    <div key={i} className='gameBoard'>
                        {playOrWin(player)}
                        <ActivePlayer activePlayer={activePlayer} players={players} player={player} />
                        <GameBoard player={player} keyChange={keyChange} />
                        {/* <Steps player={player} players={players} /> */}
                        <Scores player={player} players={players} />
                        <br />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <LogIn startGame={setGameActive} players={players} setPlayers={setPlayers} />
    );

}
export default Controle;