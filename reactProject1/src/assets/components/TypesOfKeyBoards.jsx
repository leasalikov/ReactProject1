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

   // const Emoji = () => {
   //     prop.setKeyBoard('EmogyKeyBoard');
   // }

   // const Simbol = () => {
   //     prop.setKeyBoard('simbolsKeyBoard');
   // }

   const changeToSpecialKeyBoard=(keyBoardKind)=>{
        // prop.setUndo(prevUndo => [...prevUndo, {func: changeToSpecialKeyBoard, arg: prop.KeyBoard}]);
       switch (keyBoardKind) {
           case 'Emoji':
               prop.setKeyBoard('EmogyKeyBoard');
               break;
           case 'Simbol':
               prop.setKeyBoard('simbolsKeyBoard');
               break;
           case 'upper':
               (prop.keyBoard=='UpperCaseAlphabet')?prop.setKeyBoard('EnglishAlphabet'):prop.setKeyBoard('UpperCaseAlphabet');
               break;
           default:
               break;
       }
   }

   return(
       <>
           <button onClick={() => changeLanguage()}>{ChangeKeyBoard}</button>
           <button onClick={() => changeToSpecialKeyBoard('Emoji')}>😊</button>
           <button onClick={() => changeToSpecialKeyBoard('Simbol')}>simbols</button>
           <button onClick={() => changeToSpecialKeyBoard('upper')}>UPPER</button>
       </>
   );
   
}
export default TypesOfKeyBoards;