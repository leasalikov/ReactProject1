
function ActivePlayer(props){
    const {activePlayer, players, player} = props;
    const playersArray = players;
    if(playersArray.indexOf(player)==activePlayer)
        playersArray[playersArray.indexOf(player)].active = "true";
    else
        playersArray[playersArray.indexOf(player)].active = "false";
    
    return(
        <></>
    )
    
}
export default ActivePlayer;