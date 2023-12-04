import React, { useState } from "react";

const OutputText = (prop) => {

    return (
        <>
            {prop.text.map((char, i) =>
                <span key={i} style={{ ...char.color, ...char.size }}>{char.letter}</span>
            )}
        </>
    )
}
export default OutputText;