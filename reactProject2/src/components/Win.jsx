
function Win(props){

    const {players, player, setPlayers, setKeyChange, setActivePlayer}= props;

    const NewGame = () => {
        const playersArray=players;
        playersArray[playersArray.indexOf(player)]={ name: player.name, number:'',steps:0, active:"false", scores:player.scores};
        // setPlayers(playersArray);
        setActivePlayer(prevActivePlayer=>((prevActivePlayer+1==players.length)?0:++prevActivePlayer));
        setKeyChange(prevKeyChange=>(++prevKeyChange));
    }
    const Quit = () => {
        const playersArray=players;
        playersArray.splice([playersArray.indexOf(player)], 1);
        // setPlayers(playersArray);
        setKeyChange(prevKeyChange=>(++prevKeyChange));
    }

    if(player.number == 100){
        
    return(
        <>
        <p>You Won!!!</p>
        <button onClick={NewGame}>New Game</button>
        <button onClick={Quit}>Quit</button>
        </>
    )
   }
    return(
        <></>
    )
}
export default Win;