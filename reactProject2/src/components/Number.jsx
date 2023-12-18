
function Number(props) {
    const { player, players, setKeyChange, setActivePlayer } = props;
    const playersArray = players;
    let playerIndex = playersArray.indexOf(player);
    if (playersArray[playerIndex].number == '') {
        const rand = Math.floor(Math.random() * 99);
        playersArray[playerIndex].number = rand;
    }
    let num = player.number;
    const updateNumber = (mathematicalOperation) => {
        if (player.active == "true") {
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
                    num = parseInt(num / 2);
                    break;
            }
            playersArray[playerIndex].number = num;
            if (player.number != 100)
                setActivePlayer(prevActivePlayer => ((prevActivePlayer + 1 == players.length) ? 0 : ++prevActivePlayer));
            setKeyChange(1);
        } 
    }
    return (
        <>
            <button onClick={() => { updateNumber('+') }}>+1</button>
            <button onClick={() => { updateNumber('-') }}>-1</button>
            <button onClick={() => { updateNumber('*') }}>*2</button>
            <button onClick={() => { updateNumber('/') }}>/2</button>
        </>
    )
}
export default Number;