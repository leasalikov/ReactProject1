import React, { useState } from "react";

function SpecialKeys(prop) {

    const DeleteAll = () => {
        // let all = prop.text;
        prop.setUndo(prevUndo => [...prevUndo, () => { prop.setText(prop.text) }]);
        // prop.setUndo(prevUndo => [...prevUndo, {func: writeAll, arg: all}]);
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

    // const UndoButton = () => {
    //     console.log(prop.undo[prop.undo.length - 1]);
    //     if (prop.undo[prop.undo.length - 1] && prop.undo[prop.undo.length - 1].color === 'black') {
    //         prop.setColor({ color: 'black' });
    //     } else if (prop.undo[prop.undo.length - 1]) {
    //         prop.setText(prop.undo[prop.undo.length - 1]);
    //     }
    //     let prevUndo = prop.undo.slice(0, -1);
    //     prop.setUndo(prevUndo);
    // };

    const UndoButton = () => {
        if (prop.undo != "") {
            prop.undo[prop.undo.length - 1]();
            let prevUndo = prop.undo.slice(0, -1);
            prop.setUndo(prevUndo);
        }
    }

    return (
        <div>
            <button onClick={() => CapsUpAll()}>UPPER ALL</button>
            <button onClick={() => DeleteAll()}>Delete all</button>
            <button onClick={() => UndoButton()}>Undo</button>
        </div>
    )
}

export default SpecialKeys; 