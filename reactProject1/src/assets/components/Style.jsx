
function Style(prop) {

    // const styles = {
    //     red: { color: 'red' },
    //     green: { color: 'green' },
    //     blue: { color: 'blue' },
    //     black: { color: 'black' },
    //     // big: { fontSize: '30px' },
    //     // defoultSize: { fontSize: '20px' },
    //     // small: { fontSize: '10px' }
    // }


    // const changeColor = (mycolor) => {
    //     prop.setUndo(prevUndo => [...prevUndo, () => { prop.setColor(prop.color) }]);
    //     switch (mycolor) {
    //         case 'red':
    //             prop.setColor(styles.red);
    //             break;
    //         case 'green':
    //             prop.setColor(styles.green)
    //             break;
    //         case 'blue':
    //             prop.setColor(styles.blue)
    //             break;
    //         case 'black':
    //             prop.setColor(styles.black)
    //             break;
    //     }
    // }

    const changeColor = (mycolor) => {
        if (prop.color != mycolor) {
            prop.setUndo(prevUndo => [...prevUndo, () => { prop.setColor(prop.color) }]);
            switch (mycolor) {
                case 'red':
                    prop.setColor('red');
                    break;
                case 'green':
                    prop.setColor('green')
                    break;
                case 'blue':
                    prop.setColor('blue')
                    break;
                case 'black':
                    prop.setColor('black')
                    break;
            }
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
        if (prop.size > 10) {
            prop.setUndo(prevUndo => [...prevUndo, () => { prop.setSize(prop.size) }]);
            switch (mysize) {
                case 'big':
                    prop.setSize(prop.size + 5)
                    break;
                case 'small':
                    prop.setSize(prop.size - 5)
                    break;
            }
        }
    }

    const changeFontFamily = (ev) => {
        if (prop.font != ev.target.value) {
            prop.setUndo(prevUndo => [...prevUndo, () => { prop.setFont(prop.font) }]);
            prop.setFont(ev.target.value);
        }
    }

    return (
        <div>
            {/* <button style={styles.red} onClick={() => changeColor('red')}>red</button>
            <button style={styles.green} onClick={() => changeColor('green')}>green</button>
            <button style={styles.blue} onClick={() => changeColor('blue')}>blue</button>
            <button style={styles.black} onClick={() => changeColor('black')}>black</button> */}
            <button style={{ color: 'red' }} onClick={() => changeColor('red')}>red</button>
            <button style={{ color: 'green' }} onClick={() => changeColor('green')}>green</button>
            <button style={{ color: 'blue' }} onClick={() => changeColor('blue')}>blue</button>
            <button onClick={() => changeColor('black')}>black</button>
            <br />
            <button onClick={() => changeSize('big')}>big</button>
            <button onClick={() => changeSize('small')}>small</button>
            <select value={prop.font} onChange={e => changeFontFamily(e)}>
                <option value="Sans-serif">Sans-serif</option>
                <option value="Serif">Serif</option>
                <option value="Monospace">Monospace</option>
                <option value="Cursive">Cursive</option>
                <option value="Fantasy">Fantasy</option>
            </select>
        </div>
    )
}

export default Style; 