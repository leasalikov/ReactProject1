import React, { useState } from "react";
import KeyBoardButtons from './KeyBoardButtons';

function TypesOfKeyBoards(prop) {

    const changeLanguage = () => {
        prop.setUndo(prevUndo => [...prevUndo, () => { prop.setKeyBoard(prop.keyBoard); prop.setChangeKeyBoard(prop.ChangeKeyBoard) }]);
        if (prop.ChangeKeyBoard == 'עברית') {
            prop.setKeyBoard('HebrewAlphabet');
            prop.setChangeKeyBoard('English');
        }
        else {
            prop.setKeyBoard('EnglishAlphabet');
            prop.setChangeKeyBoard('עברית');
        }
    }

    const changeToSpecialKeyBoard = (keyBoardKind) => {
        prop.setUndo(prevUndo => [...prevUndo, () => { prop.setKeyBoard(prop.keyBoard) }]);
        // prop.setUndo(prevUndo => [...prevUndo, {func: changeToSpecialKeyBoard, arg: prop.KeyBoard}]);
        switch (keyBoardKind) {
            case 'Emoji':
                prop.setKeyBoard('EmogyKeyBoard');
                break;
            case 'Simbol':
                prop.setKeyBoard('simbolsKeyBoard');
                break;
            case 'upper':
                (prop.keyBoard == 'UpperCaseAlphabet') ? prop.setKeyBoard('EnglishAlphabet') : prop.setKeyBoard('UpperCaseAlphabet');
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <button onClick={() => changeLanguage()}>{prop.ChangeKeyBoard}</button>
            <button onClick={() => changeToSpecialKeyBoard('Emoji')}>😊</button>
            <button onClick={() => changeToSpecialKeyBoard('Simbol')}>simbols</button>
            <button onClick={() => changeToSpecialKeyBoard('upper')}>UPPER</button>
        </div>
    );

}
export default TypesOfKeyBoards;