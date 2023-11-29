import React, { useState } from "react";

function SpecialKeys(prop){

    const deleteAll=()=>{
        prop.setText([])
    }


    const capsUpAll=()=>{
        prop.setText((prop.text).map((letter) => (letter.toUpperCase())));
    }

    const undo=()=>{

    }

    return(
        <>
            <button onClick={() => capsUpAll()}>UPPER ALL</button>
            <button onClick={() => deleteAll()}>delete all</button>
            <button onClick={() => undo()}>undo</button>
        </>
    )
}

export default SpecialKeys; 