import { useState } from "react";

function Steps(props){
    const { player, setPlayers, players } = props;
    let steps = player.steps;
    const playersArray=players;
    if(player.active=="true")
    {
        playersArray[playersArray.indexOf(player)].steps = steps+0.5;
    }
return(
  <></>
)
}
export default Steps;