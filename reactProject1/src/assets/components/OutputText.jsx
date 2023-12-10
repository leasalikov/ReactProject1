import React, { useState } from "react";

const OutputText = (prop) => {

    return (
        <div className='textcontainer'>
            {prop.text.map((char, i) =>
                <span key={i} style={{ ...char.color, ...char.size }}>{char.letter}</span>
            )}
        </div>
    )
}
export default OutputText;