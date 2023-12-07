
function RandNumber(props) {
    const { player, setPlayers, players, setKeyChange, setActivePlayer } = props;
    const playersArray = players;
    if(playersArray[playersArray.indexOf(player)].number==''){
        const rand = Math.floor(Math.random() * 99);
        playersArray[playersArray.indexOf(player)].number = rand;
    }
    // setPlayers(players);
    let num = player.number;
    const updateNumber = (mathematicalOperation) => {
    if(player.active=="true"){
        switch (mathematicalOperation) {
            case '+':
                num++;
                break;
            case '-':
                num--;
                break;
            case '*':
                num *= 2;
                break;
            case '/':
                num= parseInt(num / 2);
                break;
        }
        playersArray[playersArray.indexOf(player)].number = num;
        // setPlayers(playersArray);
        if(player.number!=100)
            setActivePlayer(prevActivePlayer=>((prevActivePlayer+1==players.length)?0:++prevActivePlayer));
        
        setKeyChange(prevKeyChange=>(++prevKeyChange));
    }}
    return (
        <>
            <button onClick={() => { updateNumber('+') }}>+1</button>
            <button onClick={() => { updateNumber('-') }}>-1</button>
            <button onClick={() => { updateNumber('*') }}>*2</button>
            <button onClick={() => { updateNumber('/') }}>/2</button>
        </>
    )
}
export default RandNumber;