import { useState } from 'react'
import './Flashcards.css'

const Flashcards = () => {
    const flashcardsData = [
        { id: 1, question: 'Welcome to the Ultimate NBA Test!', answer: 'Test your knowledge of the NBA with these challenging questions.' },
        { id: 2, question: '...', answer: '...' },
        { id: 3, question: '...', answer: '...' },
        { id: 4, question: '...', answer: '...' }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardSide, setCardSide] = useState('question');

    const handleFlip = () => {
        setCardSide((prev) => (prev === 'question' ? 'answer' : 'question'));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
        setCardSide('question');
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, flashcardsData.length - 1));
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