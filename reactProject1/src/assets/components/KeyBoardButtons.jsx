import React, { useState } from "react";
// import style from "./components/KeyBoard.css";
// import './KeyBoardButtons.css'
import TypesOfKeyBoards from './TypesOfKeyBoards'
import OutputText from "./OutputText";
// import Style from './Style'

function KeyBoardButtons(prop) {
    
    const [KeyBoard, setKeyBoard] = useState('EnglishAlphabet');
    const [text, setText] = useState([{ letter: "",color: prop.color, size: prop.size}]);

    const EnglishAlphabet = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '?', '!'];
    const HebrewAlphabet = ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', 'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ', '.', ',', '?', '!'];
    const EmogyKeyBoard = ['😂', '❤️', '🤣', '👍', '😭', '🙏', '😘', '🥰', '😍', '😊', '😁', '💕', '🥺', '😅', '🙄', '😆', '🤗', '😉', '🤔', '👏', '🙂', '😳', '🥳', '😎', '😔', '😏', '😢', '👉', '💗'];
    const simbolsKeyBoard = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', ',', '?', '!', ':', '(', ')', '@', '#', '$', '%', '^', '&', '*', '-', '=', '+', '[', ']']
    const getKeyboard = (keyboard) => {
        switch (keyboard) {
            case 'EnglishAlphabet':
                return EnglishAlphabet
            case 'HebrewAlphabet':
                return HebrewAlphabet
            case 'EmogyKeyBoard':
                return EmogyKeyBoard
            case 'simbolsKeyBoard':
                return simbolsKeyBoard
            default:
                break;
        }
    }

    const handleClick = (newLetter) => {
        setText(prevText => [...prevText, { letter: newLetter,color: prop.color, size: prop.size}]);
    };

    const deleteChar = () => {
        setText(prevText => prevText.slice(0, -1));
    };
    const enterButton = () => {
        setText(prevText => [...prevText, { letter: <br/>}]);
    };
    

    return (
        <div>
            <p>!!!!!המקלדת המהממת</p>
            <OutputText text={text}/>
            <br />
            {getKeyboard(KeyBoard).map((letter, index) => (
                <button key={index} onClick={() => handleClick(letter)}>{letter}</button>))}
            <button onClick={() => handleClick(" ")}>______</button>
            <button onClick={() => deleteChar()}>del</button>
            <button onClick={() => enterButton()}>→</button>
            <TypesOfKeyBoards setKeyBoard={setKeyBoard} />
        </div>
    );
}

export default KeyBoardButtons;