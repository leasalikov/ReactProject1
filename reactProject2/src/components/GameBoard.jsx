import { useState } from "react";
import LogIn from "./LogIn";

function GameBoard(props) {
    const { player, keyChange} = props;

    return (
        <div key={keyChange}>
            <p>Player: {player.name}</p>
            <p>number: {player.number}</p>
            <p>Steps: {player.steps}</p>
            <p>Activ: {player.active}</p>
        </div>
    )
}

export default GameBoard;