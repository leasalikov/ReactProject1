import { useState } from "react";
import LogIn from "./LogIn";

function RandNumber(props) {
    const { player, setPlayers, players } = props;
    const rand = Math.floor(Math.random() * 99);
    const playersArray = players;
    playersArray[playersArray.indexOf(player)].number = rand;
    // setPlayers(players);
    const num = player.number;
    const updateNumber = (mathematicalOperation) => {
        switch (mathematicalOperation) {
            case '+':
                num++;
                break;
            case '+':
                num--;
                break;
            case '*':
                num *= 2;
                break;
            case '/':
                num /= 2;
                break;

            default:
                break;
        }
    }
    return (
        <>
            <button onclick={() => { updateNumber('+') }}>+1</button>
            <button onclick={() => { updateNumber('-') }}>-1</button>
            <button onclick={() => { updateNumber('*') }}>*2</button>
            <button onclick={() => { updateNumber('/') }}>/2</button>
        </>
    )
}

export default RandNumber;