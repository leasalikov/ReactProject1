
function Steps(props){
    const { player, players } = props;
    let steps = player.steps; 
    const playersArray=players;   
    let playerIndex=playersArray.indexOf(player);
    if(player.active=="true")
    {
        playersArray[playerIndex].steps = steps+0.5;
    }
return(
  <></>
)
}
export default Steps;