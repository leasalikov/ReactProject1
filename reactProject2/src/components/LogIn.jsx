
import { useState } from "react";
// import { useRef } from "react";


function LogIn(){

    const [players, setPlayers] = useState([{name:""}]);
    const signUser = () =>{
     let gamer= prompt("enter name:");
     console.log(players.filter(obj=>obj.name===gamer));
// if(players.)
    if(players.filter(obj=>obj.name===gamer)=="[]"){
        console.log("h")
        setPlayers(prevPlayers => [...prevPlayers, {name:gamer}]);
      }
    //  if(players.map((player, i) =>{key={i} (player===gamer)?true:false}))
        
    }

return(
<>
    <h1>Get to 100!!!</h1>
    <h2>Enter the player's name:</h2>
    <button onClick = {()=>{signUser()}} >😭😭😭😭😭😭😭😭😭</button>
    <br/>
    {players.map((player, i) =>
            <>
            <br/>
            <span key={i} >{player.name}</span>
            </>
        )}
</>
)   
}
export default LogIn;