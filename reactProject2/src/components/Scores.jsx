
function Scores(props){
    const{player, players} = props;
    const playersArray = players;
    let myLocalStoragePlayer;
    if(player.active=="Win"){
        let localStoragePlayers = JSON.parse(localStorage.getItem('players'));
        playersArray[playersArray.indexOf(player)].scores.push(player.steps);
        // playersArray.every(obj => {obj.name !== player.name})
        myLocalStoragePlayer=localStoragePlayers.forEach((localStoragePlayer) => {
            if(localStoragePlayer.name==localStoragePlayer.name){
                localStoragePlayers[localStoragePlayers.indexOf(localStoragePlayer)].scores.push(player.steps);
                localStorage.setItem('players', JSON.stringify(localStoragePlayers));
                console.log(localStoragePlayers);
            }})
        
        // localStoragePlayers[localStoragePlayers.indexOf(myLocalStoragePlayer)].scores.push(player.steps);
        // localStorage.setItem('players', JSON.stringify(localStoragePlayers));
                // console.log(player.localStoragePlayers);
    }
return(
    <></>
);
}
export default Scores;