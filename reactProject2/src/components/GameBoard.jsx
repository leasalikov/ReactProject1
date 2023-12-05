import { useState } from "react";
import LogIn from "./LogIn";

function GameBoard(props) {
    const { player } = props;

    return (
        <>
            <p>player: {player.name}</p>
            <p>number: {player.number}</p>
        </>
    )
}

export default GameBoard;