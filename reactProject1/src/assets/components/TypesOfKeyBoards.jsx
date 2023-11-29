 import React, { useState } from "react";
 import KeyBoardButtons from './KeyBoardButtons';

 function TypesOfKeyBoards(prop){

    const [ChangeKeyBoard, setChangeKeyBoard] = useState('עברית');

    const changeLanguage = () => {
        if (ChangeKeyBoard == 'עברית') {
            prop.setKeyBoard('HebrewAlphabet');
            setChangeKeyBoard('English');
        }
        else {
            prop.setKeyBoard('EnglishAlphabet');
            setChangeKeyBoard('עברית');
        }
    }

    const Emoji = () => {
        prop.setKeyBoard('EmogyKeyBoard');
    }

    const Simbol = () => {
        prop.setKeyBoard('simbolsKeyBoard');
    }

    return(
        <>
            <button onClick={() => changeLanguage()}>{ChangeKeyBoard}</button>
            <button onClick={() => Emoji()}>😊</button>
            <button onClick={() => Simbol()}>simbols</button>
        </>
    );
    
 }
 export default TypesOfKeyBoards;