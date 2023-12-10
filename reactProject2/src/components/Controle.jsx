import { useState } from "react"
import GameBoard from "./GameBoard"
import LogIn from "./LogIn"
import RandNumber from "./RandNunber"
import Steps from "./Steps"
import ActivePlayer from "./ActivePlayer"
import Win from "./Win"
import Scores from "./Scores"
import TopPlayers from "./TopPlayers"

const Controle = () => {
    // const style={
    //     div:{display: 'flex'}
    // }
    const [gameActive, setGameActive] = useState(false);
    const [players, setPlayers] = useState([]);
    const [keyChange, setKeyChange] = useState(0);
    const [activePlayer, setActivePlayer] = useState(0);

    if (gameActive) {
        return (
            <div>
                <TopPlayers keyChange={keyChange}/>
                {players.map((player, i) => (
                    <div key={i} className='gameBoard'>
                        <RandNumber player={player} setPlayers={setPlayers} players={players} setKeyChange={setKeyChange} setActivePlayer={setActivePlayer} />
                        <Steps player={player} setPlayers={setPlayers} players={players} activePlayer={activePlayer} />
                        <ActivePlayer activePlayer={activePlayer} players={players} player={player}/>
                        <Scores player={player} players={players} />
                        <GameBoard player={player} setPlayers={setPlayers} keyChange={keyChange} setActivePlayer={setActivePlayer} />  
                        <Win player={player} players={players} setPlayers={setPlayers} setKeyChange={setKeyChange} setActivePlayer={setActivePlayer} />                     
                        <br />
                    </div>
                ))}
                {/* {players.map((player, i) => <GameBoard key={i} player={player} setPlayers={setPlayers} />)}
                {players.map((player, i) => <RandNumber key={i} player={player} setPlayers={setPlayers} players={players} />)} */}
            </div>
        );
    }
    return (<LogIn startGame={setGameActive} players={players} setPlayers={setPlayers} />);
}
export default Controle;