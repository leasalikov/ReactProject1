

function Win(props){

    const {players, player}= props;
   if(player.number == 100){
    return(
        <>
        <p>You Won!!!</p>
        <button onClick={()=>NewGame()}>New Game</button>
        <button onClick={()=>Quit()}>Quit</button>
        </>
    )
   }
    return(
        <></>
    )
}
export default Win;