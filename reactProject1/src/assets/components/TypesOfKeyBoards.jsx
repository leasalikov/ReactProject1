import React, { useState } from "react";
import KeyBoardButtons from './KeyBoardButtons';

function TypesOfKeyBoards(){

    const EnglishAlphabet = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '?', '!'];
    const HebrewAlphabet = ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', 'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ', '.', ',', '?', '!'];
    const EmogyKeyBoard = ['😂', '❤️', '🤣', '👍', '😭', '🙏', '😘', '🥰', '😍', '😊', '😁', '💕', '🥺', '😅', '🙄', '😆', '🤗', '😉', '🤔', '👏', '🙂', '😳', '🥳', '😎', '😔', '😏', '😢', '👉', '💗'];
    const simbolsKeyBoard = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', ',', '?', '!', ':', '(', ')', '@', '#', '$', '%', '^', '&', '*', '-', '=', '+', '[', ']']
    const [KeyBoard, setKeyBoard] = useState(EnglishAlphabet);

    const changeLanguage = () => {
        if (ChangeKeyBoard == 'עברית') {
            setKeyBoard(HebrewAlphabet);
            setChangeKeyBoard('English');
        }
        else {
            setKeyBoard(EnglishAlphabet);
            setChangeKeyBoard('עברית');
        }
    }

    const Emoji = () => {
        setKeyBoard(EmogyKeyBoard);
    }

    const Simbol = () => {
        setKeyBoard(simbolsKeyBoard);
    }

    return(
        <>
            <KeyBoardButtons keyBoard={KeyBoard.valueOf()} changeLanguage={changeLanguage} Emoji={Emoji} Simbol={Simbol} />
        </>
    );
    
}
export default TypesOfKeyBoards;