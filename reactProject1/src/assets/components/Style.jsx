import React, { useState } from "react";
import KeyBoardButtons from './KeyBoardButtons'
function Style(prop) {

    const styles = {
        red: { color: 'red' },
        green: { color: 'green' },
        blue: { color: 'blue' },
        black: { color: 'black' },
        big: { fontSize: '30px' },
        defoultSize: { fontSize: '20px' },
        small: { fontSize: '10px' }
    }

    // const [color, setColor] = useState(styles.black);
    // const [size, setSize] = useState(styles.defoultSize);

    const changeColor = (mycolor) => {
        prop.setUndo(prevUndo => [...prevUndo, () => { prop.setColor(prop.color) }]);
        // prop.setUndo(prevUndo => [...prevUndo, prop.color]);
        // prop.setUndo(prevUndo => [...prevUndo, {func: changeColor, arg: prop.color}]);
        switch (mycolor) {
            case 'red':
                prop.setColor(styles.red);
                break;
            case 'green':
                prop.setColor(styles.green)
                break;
            case 'blue':
                prop.setColor(styles.blue)
                break;
            case 'black':
                prop.setColor(styles.black)
                break;
        }
    }

    const changeSize = (mysize) => {
        prop.setUndo(prevUndo => [...prevUndo, () => { prop.setSize(prop.size) }]);
        // prop.setUndo(prevUndo => [...prevUndo, {func: changeSize, arg: prop.size}]);
        switch (mysize) {
            case 'big':
                prop.setSize(styles.big)
                break;
            case 'small':
                prop.setSize(styles.small)
                break;
        }
    }

    return (
        <div>
            {/* <KeyBoardButtons color={color} size={size} /> */}
            <button style={styles.red} onClick={() => changeColor('red')}>red</button>
            <button style={styles.green} onClick={() => changeColor('green')}>green</button>
            <button style={styles.blue} onClick={() => changeColor('blue')}>blue</button>
            <button style={styles.black} onClick={() => changeColor('black')}>black</button>
            <br/>  
            <button onClick={() => changeSize('big')}>big</button>
            <button onClick={() => changeSize('small')}>small</button>
            {/* <label for="dog-names">Choose a dog name:</label>  */}
            <select name="dog-names" id="dog-names"> 
                <option value=""></option> 
                <option value=""></option> 
                <option value=""></option> 
                <option value=""></option> 
            </select>
        </div>
    )
}

export default Style; 