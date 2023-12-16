
function Style(prop) {

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

    const changeFontFamily = (event) => {
        if (prop.font != event.target.value) {
            prop.setUndo(prevUndo => [...prevUndo, () => { prop.setFont(prop.font) }]);
            prop.setFont(event.target.value);
        }
    }

    return (
        <div>
            <button style={{ color: 'red' }} onClick={() => changeColor('red')}>red</button>
            <button style={{ color: 'green' }} onClick={() => changeColor('green')}>green</button>
            <button style={{ color: 'blue' }} onClick={() => changeColor('blue')}>blue</button>
            <button onClick={() => changeColor('black')}>black</button>
            <br />
            <button onClick={() => changeSize('big')}>big</button>
            <button onClick={() => changeSize('small')}>small</button>
            <select style={{ fontFamily: prop.font }} onChange={e => changeFontFamily(e)}>
                <option style={{ fontFamily: "Sans-serif" }} value="" disabled selected hidden>choose a fond</option>
                <option style={{ fontFamily: "Sans-serif" }} value="Sans-serif">Sans-serif</option>
                <option style={{ fontFamily: "Serif" }} value="Serif">Serif</option>
                <option style={{ fontFamily: "Monospace" }} value="Monospace">Monospace</option>
                <option style={{ fontFamily: "Cursive" }} value="Cursive">Cursive</option>
                <option style={{ fontFamily: "Fantasy" }} value="Fantasy">Fantasy</option>
            </select>
        </div>
    )
}

export default Style; 