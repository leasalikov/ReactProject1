import { useState } from "react";
import GameBoard from "./GameBoard"
import LogIn from "./LogIn"
import RandNumber from "./RandNunber";
// import Steps from "./Steps";
import ActivePlayer from "./ActivePlayer";
import Win from "./Win"

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
            <>
                {players.map((player, i) => (
                    <div key={i}>

                        <RandNumber player={player} setPlayers={setPlayers} players={players} setKeyChange={setKeyChange} setActivePlayer={setActivePlayer} />
                        {/* <Steps player={player} setPlayers={setPlayers} players={players} setKeyChange={setKeyChange} activPlayer={activPlayer} /> */}
                        <ActivePlayer activePlayer={activePlayer} players={players} player={player}/>
                        <GameBoard player={player} setPlayers={setPlayers} keyChange={keyChange} setActivePlayer={setActivePlayer} />  
                        <Win player={player} players={players} setPlayers={setPlayers} setKeyChange={setKeyChange}/>                     
                        <br />
                    </div>
                ))}
                {/* {players.map((player, i) => <GameBoard key={i} player={player} setPlayers={setPlayers} />)}
                {players.map((player, i) => <RandNumber key={i} player={player} setPlayers={setPlayers} players={players} />)} */}
            </>
        );
    }

    return (<LogIn startGame={setGameActive} players={players} setPlayers={setPlayers} />);
}
export default Controle;