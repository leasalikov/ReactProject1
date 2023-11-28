import React, { useState } from "react";
// import style from "./components/KeyBoard.css";
// import './KeyBoardButtons.css'
import TypesOfKeyBoards from './TypesOfKeyBoards'
// import Style from './Style'

function KeyBoardButtons(prop) {

    const styles = {
        red: {
            color: 'red'
        },
        green: {
            color: 'green'
        },
        blue: {
            color: 'blue'
        },
        big: {
            size: '19px'
        },
        black: {
            color: 'black'
        },
    }

    // const [color, setColor] = useState(styles.black);
    // const [type, setType] = useState("");
     const [text, setText] = useState([{letter:"", style:color}]);
    // const [size, setSize] = useState('20px');
    //const [text, setText] = useState(letter:"", typeStyle);
    // const [style, setStyle] = useState();

    //const EnglishAlphabet = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '?', '!'];
   // const HebrewAlphabet = ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', 'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ', '.', ',', '?', '!'];
    // const EmogyKeyBoard = ['😂', '❤️', '🤣', '👍', '😭', '🙏', '😘', '🥰', '😍', '😊', '😁', '💕', '🥺', '😅', '🙄', '😆', '🤗', '😉', '🤔', '👏', '🙂', '😳', '🥳', '😎', '😔', '😏', '😢', '👉', '💗'];
    // const simbolsKeyBoard = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', ',', '?', '!', ':', '(', ')', '@', '#', '$', '%', '^', '&', '*', '-', '=', '+', '[', ']']
     //const [KeyBoard, setKeyBoard] = useState(EnglishAlphabet);
    const [ChangeKeyBoard, setChangeKeyBoard] = useState('עברית');
    
    // const handleClick = (newLetter) => {
    //     //const [text, setText] = 
    //     setText([...text,{letter:newLetter, style:color}]);
    // }
    const handleClick = (newLetter) => {
        setText(prevText => [...prevText, { letter: newLetter, style: color }]);
      };

    // const changeLanguage = () => {
    //     if (ChangeKeyBoard == 'עברית') {
    //         setKeyBoard(HebrewAlphabet);
    //         setChangeKeyBoard('English');
    //     }
    //     else {
    //         setKeyBoard(EnglishAlphabet);
    //         setChangeKeyBoard('עברית');
    //     }
    // }

    // const Emoji = () => {
    //     setKeyBoard(EmogyKeyBoard);
    // }

    // const Simbol = () => {
    //     setKeyBoard(simbolsKeyBoard);
    // }

    
    const deleteChar = () => {
        setText(prevText => prevText.slice(0, -1));
      };

    // const changeColor = (color) => {
    //     switch (color) {
    //         case 'red':
    //             setColor(styles.red)
    //             break;
    //         case 'green':
    //             setColor(styles.green)
    //             break;
    //         case 'blue':
    //             setColor(styles.blue)
    //             break;
    //     }
    // }

    // const changeColorGreen=()=>{
    //     setColor(styles.green)
    // }
    // const changeColorBlue=()=>{
    //     setColor(styles.blue)
    // }

    // const [KeyBoard, setKeyBoard] = useState();
    // function creatKeyBoardButtons(promp){
    //     promp.setKeyBoard(promp.ChangeKeyBoard);
    // }

    //prompt.
    return (
        <div>
             <p>!!!!!המקלדת המהממת</p>
{/* {prop.keyBoard.map((letter, index) => {
    return <button key={index} onClick={() => handleClick(letter)}>{letter}</button>
})} */}
            {prop.keyBoard.map((letter, index) => (
            <button key={index} onClick={() => handleClick(letter)}>{letter}</button>))}

            <button onClick={() => handleClick(" ")}>______</button>
            <button onClick={() => prop.changeLanguage()}>{ChangeKeyBoard}</button>
            {/* <button style={styles.red} onClick={() => changeColor('red')}>red</button>
            <button style={styles.green} onClick={() => changeColor('green')}>green</button>
            <button style={styles.blue} onClick={() => changeColor('blue')}>blue</button> */}
            <button onClick={() => deleteChar()}>del</button>

            <button onClick={() => prop.Emoji()}>😊</button>
            <button onClick={() => prop.Simbol()}>simbols</button>
            
            {text.map((char, i) =>
                <span key={i} style={char.style}>{char.letter}</span>
            )} 
            {/* <span style={color}>{type}</span> */}
            {/* <span></span>
        {type.map((letter,index)=>{
            <span style={letter.style}>{letter.text}</span>
        }
        )} */}

            <p></p>
        </div>
    );
}

export default KeyBoardButtons;