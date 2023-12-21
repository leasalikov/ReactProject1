
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
        if (prop.keyBoard != keyBoardKind) {
            prop.setUndo(prevUndo => [...prevUndo, () => { prop.setKeyBoard(prop.keyBoard) }]);
            prop.setKeyBoard(keyBoardKind);
        }
    }

    return (
        <div>
            <button onClick={() => changeLanguage()}>{prop.ChangeKeyBoard}</button>
            <button onClick={() => changeToSpecialKeyBoard('EmogyKeyBoard')}>😊</button>
            <button onClick={() => changeToSpecialKeyBoard('simbolsKeyBoard')}>simbols</button>
            <button onClick={() => changeToSpecialKeyBoard('UpperCaseAlphabet')}>UPPER</button>
        </div>
    );

}
export default TypesOfKeyBoards;