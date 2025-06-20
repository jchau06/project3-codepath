import { useState, useRef } from 'react'
import './Flashcards.css'

const Flashcards = () => {
    const flashcardsData = [
        { id: 1, question: 'Welcome to the Ultimate NBA Test!', answer: 'Test your knowledge of the NBA with these challenging questions.' },
        { id: 2, question: 'What NBA franchise drafted Stephen Curry?', answer: 'Golden State Warriors' },
        { id: 3, question: 'What year did Lebron James win a championship with the Cleveland Caveliers?', answer: '2016' },
        { id: 4, question: 'How many championship rings did Michael Jordan win?', answer: '6' },
        { id: 5, question: 'What years did Giannis Antetokounmpo win MVP?', answer: '2019 and 2020' },
        { id: 6, question: 'How many championships did the Boston Celtics win?', answer: '18' },
        { id: 7, question: 'Who is the highest paid NBA player in 2025?', answer: 'Stephen Curry' },
        { id: 8, question: 'Who did the Atlanta Hawks draft as the first pick of the 2024 NBA draft?', answer: 'Zaccharie Risacher' },
        { id: 9, question: 'How many more rings did Magic Johnson win compared to Larry Bird?', answer: '2' },
        { id: 10, question: 'What basketball player has the highest number of assists in the history of the NBA?', answer: 'John Stockton' },
        { id: 11, question: 'In what year did Wilt Chamberlain score his 100-point game?', answer: '1962' },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardSide, setCardSide] = useState('question');

    const handleFlip = () => {
        setCardSide((prev) => (prev === 'question' ? 'answer' : 'question'));
    };

    const handlePrev = () => {
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = 0
        };
        setCurrentIndex(prevIndex);
        setCardSide('question');
    };

    const handleNext = () => {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= flashcardsData.length) {
            nextIndex = 0; // Loop back to the first card
        }
        setCurrentIndex(nextIndex);
        setCardSide('question');
    };

    const flashcard = flashcardsData[currentIndex];

    const [guess, setGuess] = useState('');
    const handleGuessChange = (event) => {
        setGuess(event.target.value);
    }

    const verifyAnswer = (event) => {
        event.preventDefault();
        if (guess.trim().toLowerCase() === flashcard.answer.toLowerCase()) {
            alert('Correct!');
        } else {
            alert(`Incorrect! The correct answer is: ${flashcard.answer}`);
        }
    }

    
    return (
        <div className="flashcard-container">
            <div className="flashcard-body" onClick={handleFlip}>
                <div className={`flashcard ${cardSide === 'answer' ? 'flipped' : ''}`}>
                    <div className="question-body">
                        <h3>{flashcard.question}</h3>
                    </div>
                    <div className="answer-body">
                        <h3>{flashcard.answer}</h3>
                    </div>
                </div>
            </div>

            <div>
                <form className="flashcard-form" onSubmit={verifyAnswer}>
                    <h3>Guess the answer here:</h3>
                    <input 
                        type="text" 
                        placeholder="Type your answer here..." 
                        value={guess}
                        onChange={handleGuessChange}/>
                    <button onClick={verifyAnswer}>Submit Guess</button>
                </form>
             </div>

            <div className="flashcard-buttons">
                <button className="prev-button" onClick={handlePrev} disabled={currentIndex === 0}>
                    <h4>←</h4>
                </button>
                <button className="next-button" onClick={handleNext} disabled={currentIndex === flashcardsData.length - 1}>
                    <h4>→</h4>
                </button>
            </div>
        </div>
    )
}

export default Flashcards;