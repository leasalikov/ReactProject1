import React, { useState } from "react";


const OutputText = () =>{

    const [text, setText] = useState([{letter:"", style:color}]);



    const handleClick = (newLetter) => {
        //const [text, setText] = 
        setText([...text,{letter:newLetter, style:color}]);
    }

}
export default OutputText;