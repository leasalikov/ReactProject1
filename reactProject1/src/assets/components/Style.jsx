
function Style(prop) {

    const styles = {
        red: { color: 'red' },
        green: { color: 'green' },
        blue: { color: 'blue' },
        black: { color: 'black' },
        // big: { fontSize: '30px' },
        // defoultSize: { fontSize: '20px' },
        // small: { fontSize: '10px' }
    }

    const changeColor = (mycolor) => {
        prop.setUndo(prevUndo => [...prevUndo, () => { prop.setColor(prop.color) }]);
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

    // const changeSize = (mysize) => {
    //     prop.setUndo(prevUndo => [...prevUndo, () => { prop.setSize(prop.size) }]);
    //     switch (mysize) {
    //         case 'big':
    //             prop.setSize(styles.big)
    //             break;
    //         case 'small':
    //             prop.setSize(styles.small)
    //             break;
    //     }
    // }

    const changeSize = (mysize) => {
        prop.setUndo(prevUndo => [...prevUndo, () => { prop.setSize(prop.size) }]);
        switch (mysize) {
            case 'big':
                prop.setSize(prop.size + 5)
                break;
            case 'small':
                if (prop.size > 10)
                    prop.setSize(prop.size - 5)
                break;
        }
    }

    return (
        <div>
            <button style={styles.red} onClick={() => changeColor('red')}>red</button>
            <button style={styles.green} onClick={() => changeColor('green')}>green</button>
            <button style={styles.blue} onClick={() => changeColor('blue')}>blue</button>
            <button style={styles.black} onClick={() => changeColor('black')}>black</button>
            <br/>  
            <button onClick={() => changeSize('big')}>big</button>
            <button onClick={() => changeSize('small')}>small</button>
            {/* <label for="dog-names">Choose a dog name:</label>  */}
            {/* <select name="dog-names" id="dog-names"> 
                <option value=""></option> 
                <option value=""></option> 
                <option value=""></option> 
                <option value=""></option> 
            </select> */}
        </div>
    )
}

export default Style; 