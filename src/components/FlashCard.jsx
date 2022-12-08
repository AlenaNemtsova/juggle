import ButtonTranslate from './ButtonTranslate';
import './FlashCard.scss';
import 'animate.css';
// import { useRef, useEffect } from 'react';
import { forwardRef } from 'react';


const FlashCard = forwardRef(({ tags, english, russian, transcription, pressed = { pressed }, setPressed = { setPressed }, animationStart, countWords = { countWords } }, ref) => {

    console.log(animationStart);
    //     const ref = useRef();
    //     useEffect(() => ref.current.focus(), [])

    return (
        <div className={(animationStart ? "flashcard-wrapper animated" : "flashcard-wrapper")}>
            <div className='flashcard'>
                <h4 className='flashcard__title'>{tags}</h4>
                <p className='flashcard__source'>{english}</p>
                <p className='flashcard__transcription'>{transcription}</p>
                <ButtonTranslate pressed={pressed} setPressed={setPressed} countWords={countWords} russian={russian} ref={ref}></ButtonTranslate>
            </div>

        </div>
    );
},
)

FlashCard.defaultProps = {
    tags: "tag",
    english: "english word",
    russian: "russian word",
    transcription: "transcription"
}

export default FlashCard


