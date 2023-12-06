import { useState } from "react";

function ActivPlayer(props){

    const {activPlayer, players, setActivPlayer, keyChange} = props;
    const playersArray = players;
    if(playersArray.indexOf(player)==activPlayer)
        playersArray[playersArray.indexOf(player)].active = true;
    else
        playersArray[playersArray.indexOf(player)].active = false;
    setActivPlayer(activPlayer = true);
    return(
        <></>
    )
    
}
export default ActivPlayer;