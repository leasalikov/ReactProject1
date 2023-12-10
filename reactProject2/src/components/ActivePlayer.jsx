import './ActivePlayer.css'
function ActivePlayer(props){
    const {activePlayer, players, player} = props;
    const playersArray = players;
    if(playersArray.indexOf(player) == activePlayer ){
        if(player.number == 100)
            playersArray[playersArray.indexOf(player)].active = "Win";
        else{
            playersArray[playersArray.indexOf(player)].active = "true";     
            playersArray[playersArray.indexOf(player)].style = 'activePlayer';
        }
    }     
    else
        playersArray[playersArray.indexOf(player)].active = "false";
    
    return(
        <></>
    )
    
}
export default ActivePlayer;