import React, { useState } from "react";
import KeyBoardButtons from './KeyBoardButtons'
function Style(){

    const styles = {
        red: { color: 'red' },
        green: { color: 'green' },
        blue: { color: 'blue' },
        black: { color: 'black' },
        big: { fontSize: '30px' },
        defoultSize: { fontSize: '20px' },
        small: { fontSize: '10px' }
    }

    const [color, setColor] = useState(styles.black);
    const [size, setSize] = useState(styles.defoultSize);
    
    const changeColor = (mycolor) => {
        switch (mycolor) {
            case 'red':
                setColor(styles.red)
                break;
            case 'green':
                setColor(styles.green)
                break;
            case 'blue':
                setColor(styles.blue)
                break;
            case 'black':
                setColor(styles.black)
                break;    
        }
    }
    
    const changeSize= (mysize) => {
        switch(mysize){
            case 'big':
                setSize(styles.big)
                break;
            case 'small':
                setSize(styles.small)
                break;
        }
    }
   
    return(
        <div>
        <KeyBoardButtons color={color} size={size} />
        <button style={styles.red} onClick={() => changeColor('red')}>red</button>
        <button style={styles.green} onClick={() => changeColor('green')}>green</button>
        <button style={styles.blue} onClick={() => changeColor('blue')}>blue</button>
        <button style={styles.black} onClick={() => changeColor('black')}>black</button>
        <button onClick={() => changeSize('big')}>big</button>
        <button onClick={() => changeSize('small')}>small</button>
        </div>
    )
 }

 export default Style; 