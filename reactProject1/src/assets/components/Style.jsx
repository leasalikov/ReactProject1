import React, { useState } from "react";

const Style=()=>{

    const [color, setColor] = useState(styles.black);
    const [size, setSize] = useState('20px');

    
    const changeColor = (color) => {
        switch (color) {
            case 'red':
                setColor(styles.red)
                break;
            case 'green':
                setColor(styles.green)
                break;
            case 'blue':
                setColor(styles.blue)
                break;
        }
    }

    return(
        <div>
        <button style={styles.red} onClick={() => changeColor('red')}>red</button>
        <button style={styles.green} onClick={() => changeColor('green')}>green</button>
        <button style={styles.blue} onClick={() => changeColor('blue')}>blue</button>
        </div>
    )
}