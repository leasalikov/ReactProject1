
function SpecialKeys(prop) {

    const DeleteAll = () => {
        prop.setUndo(prevUndo => [...prevUndo, () => { prop.setText(prop.text) }]);
        prop.setText([]);
    }

    const CapsUpAll = () => {
        prop.setUndo(prevUndo => [...prevUndo, () => { prop.setText(prop.text) }]);
        let newText = prop.text.map((myletter) => ({
            ...myletter,
            letter: myletter.letter.toUpperCase()
        }));
        prop.setText(newText);
    };

    const UndoButton = () => {
        if (prop.undo != "") {
            prop.undo[prop.undo.length - 1]();
            let prevUndo = prop.undo.slice(0, -1);
            prop.setUndo(prevUndo);
        }
    }

    return (
        <>
            <button onClick={() => CapsUpAll()}>UPPER ALL</button>
            <button onClick={() => DeleteAll()}>Delete all</button>
            <button onClick={() => UndoButton()}>Undo</button>
        </>
    )
}

export default SpecialKeys; 