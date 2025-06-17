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

    const pastIndex = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardSide, setCardSide] = useState('question');

    const handleFlip = () => {
        setCardSide((prev) => (prev === 'question' ? 'answer' : 'question'));
    };

    const handlePrev = () => {
        setCurrentIndex(pastIndex.current);
    };

    const handleNext = () => {
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * (flashcardsData.length - 1)) + 1;
        } while (nextIndex === currentIndex && flashcardsData.length > 2);
        pastIndex.current = currentIndex;
        setCurrentIndex(nextIndex);
        setCardSide('question');
    };

    const flashcard = flashcardsData[currentIndex];

    
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
            <div className="flashcard-buttons">
                <button className="prev-button" onClick={handlePrev}>
                    <h4>←</h4>
                </button>
                <button className="next-button" onClick={handleNext}>
                    <h4>→</h4>
                </button>
            </div>
        </div>
    )
}

export default Flashcards;