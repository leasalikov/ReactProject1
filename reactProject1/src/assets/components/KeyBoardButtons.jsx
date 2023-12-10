import React, { useState } from "react";
// import style from "./components/KeyBoard.css";
import './KeyBoardButtons.css'
import TypesOfKeyBoards from './TypesOfKeyBoards'
import OutputText from "./OutputText";
import SpecialKeys from './SpecialKeys'
import Style from "./Style";

function KeyBoardButtons() {

    const [KeyBoard, setKeyBoard] = useState('EnglishAlphabet');
    const [ChangeKeyBoard, setChangeKeyBoard] = useState('עברית');
    const [undo, setUndo] = useState([]);
    const [color, setColor] = useState({ color: 'black' });
    const [size, setSize] = useState({ fontSize: '20px' });
    const [text, setText] = useState([{ letter: "", color: color, size: size }]);

    const EnglishAlphabet = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '.'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '?', '!']
      ];
      const simbolsKeyBoard = [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['.', ',', '?', '!', ':', '(', ')', '@', '#', '$'],
        ['%', '^', '&', '*', '-', '=', '+', '[', ']']
      ];
      const EmogyKeyBoard = [
        ['😂', '❤️', '🤣', '👍', '😭', '🙏', '😘', '🥰', '😍', '😊'],
        ['😁', '💕', '🥺', '😅', '🙄', '😆', '🤗', '😉', '🤔', '👏'],
        ['🙂', '😳', '🥳', '😎', '😔', '😏', '😢', '👉', '💗']
      ];
      const HebrewAlphabet = [
        [ '!', 'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', ','],
        [, 'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'],
        [, 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ', '.', '?']
      ];
    //const EnglishAlphabet = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '?', '!'];
    //const HebrewAlphabet = ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', 'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ', '.', ',', '?', '!'];
    //const EmogyKeyBoard = ['😂', '❤️', '🤣', '👍', '😭', '🙏', '😘', '🥰', '😍', '😊', '😁', '💕', '🥺', '😅', '🙄', '😆', '🤗', '😉', '🤔', '👏', '🙂', '😳', '🥳', '😎', '😔', '😏', '😢', '👉', '💗'];
    //const simbolsKeyBoard = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', ',', '?', '!', ':', '(', ')', '@', '#', '$', '%', '^', '&', '*', '-', '=', '+', '[', ']']
    //const UpperCaseAlphabet = EnglishAlphabet.map((letter) => (letter.toUpperCase()));
    const UpperCaseAlphabet = EnglishAlphabet.map(row =>
        row.map(letter => letter.toUpperCase())
      );
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
        setUndo(prevUndo => [...prevUndo, () => { setText(text) }]);
        // setUndo(prevUndo => [...prevUndo, text]);
        // setUndo(prevUndo => [...prevUndo, {func: deleteChar}]);
        setText(prevText => [...prevText, { letter: newLetter, color: color, size: size }]);
    };

    const deleteChar = () => {
        setUndo(prevUndo => [...prevUndo, () => { setText(text) }]);
        // setUndo(prevUndo => [...prevUndo, text]);
        let deleteLetter = text[text.length - 1].letter;
        console.log(deleteLetter);
        setText(prevText => prevText.slice(0, -1));
        // setUndo(prevUndo => [...prevUndo, {func: handleClick, arg: deleteLetter}]);
    };

    const enterButton = () => {
        setUndo(prevUndo => [...prevUndo, () => { setText(text) }]);
        // setUndo(prevUndo => [...prevUndo, {func: deleteChar}]);
        // setUndo(prevUndo => [...prevUndo, text]);
        setText(prevText => [...prevText, { letter: <br /> }]);
    };

    return (
        <div>
            <OutputText text={text} />
            <br />
            {/* {getKeyboard(KeyBoard).map((letter, index) => (
                <button key={index} className='key' onClick={() => handleClick(letter)}>{letter}</button>))}
                 */}
            {getKeyboard(KeyBoard).map((row, rowIndex) => (
                <div key={rowIndex} className='keyboard-row'>
                {row.map((letter, index) => (<button key={index} className='key' onClick={() => handleClick(letter)}>{letter}</button>))}
            </div>))}             
            <button className='buttonKey' onClick={() => enterButton()}>→</button>
            <button className='buttonKey' onClick={() => handleClick(" ")}>______</button>
            <button className='buttonKey' onClick={() => deleteChar()}>del</button>
            <br/>
            <h1>Special keys:</h1>
            <SpecialKeys text={text} setText={setText} undo={undo} setUndo={setUndo} setColor={setColor} setKeyBoard={setKeyBoard} setChangeKeyBoard={setChangeKeyBoard} />
            <br/>
            <h1>Types Of KeyBoards:</h1>
            <TypesOfKeyBoards setKeyBoard={setKeyBoard} keyBoard={KeyBoard} setChangeKeyBoard={setChangeKeyBoard} ChangeKeyBoard={ChangeKeyBoard} setUndo={setUndo} />
            
            <h1>Styles:</h1>
            <Style setUndo={setUndo} color={color} setColor={setColor} size={size} setSize={setSize} />
        </div>
    );
}

export default KeyBoardButtons;