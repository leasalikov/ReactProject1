
function ActivePlayer(props){
    const {activePlayer, players, player} = props;
    const playersArray = players;
    let playerIndex=playersArray.indexOf(player);
    if(playerIndex == activePlayer ){
        if(player.number == 100){
            playersArray[playerIndex].active = "Win";
        }
        else{
            playersArray[playerIndex].active = "true";     
            playersArray[playerIndex].style = 'activePlayer';
        }
    }     
    else
        playersArray[playerIndex].active = "false";
    
    return(
        <></>
    )    
}
export default ActivePlayer;