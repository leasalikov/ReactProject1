import React, { useState } from "react";
// import style from "./components/KeyBoard.css";
// import './KeyBoardButtons.css'
import TypesOfKeyBoards from './TypesOfKeyBoards'
import OutputText from "./OutputText";
import SpecialKeys from './SpecialKeys'
import Style from "./Style";

function KeyBoardButtons() {
    
    const [KeyBoard, setKeyBoard] = useState('EnglishAlphabet');
    // const [undo, setUndo] = useState([{func:'', arg:''}]);
    const [undo, setUndo] = useState([]);
    const [color, setColor] = useState({color: 'black'});
    const [size, setSize] = useState({fontSize: '20px'});
    const [text, setText] = useState([{ letter: "", color: color, size: size}]);

    const EnglishAlphabet = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '?', '!'];
    const HebrewAlphabet = ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', 'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ', '.', ',', '?', '!'];
    const EmogyKeyBoard = ['😂', '❤️', '🤣', '👍', '😭', '🙏', '😘', '🥰', '😍', '😊', '😁', '💕', '🥺', '😅', '🙄', '😆', '🤗', '😉', '🤔', '👏', '🙂', '😳', '🥳', '😎', '😔', '😏', '😢', '👉', '💗'];
    const simbolsKeyBoard = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', ',', '?', '!', ':', '(', ')', '@', '#', '$', '%', '^', '&', '*', '-', '=', '+', '[', ']']
    const UpperCaseAlphabet = EnglishAlphabet.map((letter) => (letter.toUpperCase()));
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
            case 'UpperCaseAlphabet':
                return UpperCaseAlphabet
            default:
                break;
        }
    }

    const handleClick = (newLetter) => {
        setUndo(prevUndo => [...prevUndo, text]);
        // setUndo(prevUndo => [...prevUndo, {func: deleteChar}]);
        setText(prevText => [...prevText, { letter: newLetter,color: color, size: size}]);
    };

    const deleteChar = () => {
        setUndo(prevUndo => [...prevUndo, text]);
       let deleteLetter = text[text.length-1].letter;
        console.log(deleteLetter);
        setText(prevText => prevText.slice(0, -1));
        // setUndo(prevUndo => [...prevUndo, {func: handleClick, arg: deleteLetter}]);
    };

    const enterButton = () => {
        // setUndo(prevUndo => [...prevUndo, {func: deleteChar}]);
        setUndo(prevUndo => [...prevUndo, text]);
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
            <TypesOfKeyBoards setKeyBoard={setKeyBoard} keyBoard={KeyBoard} setUndo={setUndo} />
            <SpecialKeys text={text} setText={setText} undo={undo} setUndo={setUndo}  setColor={setColor} />
            <Style setUndo={setUndo} color={color} setColor={setColor} size={size} setSize={setSize} />
        </div>
    );
}

export default KeyBoardButtons;