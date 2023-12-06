

function Win(props){

    const {players, player, setPlayers, setKeyChange}= props;

    const NewGame = () => {
        const playersArray=players;
        playersArray[playersArray.indexOf(player)]={ name: player.name, number:'',steps:0, active:"false"};
        // setPlayers(playersArray);
        setKeyChange(prevKeyChange=>(++prevKeyChange));
    }
    const Quit = () => {
        const playersArray=players;
        playersArray.splice([playersArray.indexOf(player)],1);
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