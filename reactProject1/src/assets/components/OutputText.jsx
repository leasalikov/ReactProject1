import './OutputText.css'

const OutputText = (prop) => {

    return (
        <div className='textcontainer'>
            {prop.text.map((char, i) =>
                <span key={i} style={{ color: char.color, fontSize: `${char.size}px`, fontFamily: char.font }}>{char.letter}</span>
            )}
        </div>
    )
}
export default OutputText;