
function Steps(props) {

  const { player, players, keyChange, setKeyChange } = props;


  let steps = player.steps;
  const playersArray = players;
  let playerIndex = playersArray.indexOf(player);

  if (player.active == "true" && keyChange == 1) {
    setKeyChange(prevKeyChange => (++prevKeyChange));
    playersArray[playerIndex].steps = steps + 1;
  }

  return (
    <p className={`${player.active}`}>Steps: {player.steps}</p>
  )

}
export default Steps;