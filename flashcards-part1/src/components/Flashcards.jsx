import { useState } from 'react'

const Flashcards = () => {
    const flashcardsData = [
        { id: 1, question: '...', answer: '...' },
        { id: 2, question: '...', answer: '...' },
        { id: 3, question: '...', answer: '...' }
    ]

    const [flashcards, setFlashcards] = useState(
        { id: 0, question: 'Welcome to the Ultimate NBA Test!', answer: 'Here is the answer!' }
    );

    const [cardSide, setCardSide] = useState('question')
    
    return (
        <div className="flashcard-container">
            <div className="flashcard-body">
                { cardSide === 'question' ? (
                    <div className="question-body" onClick={() => setCardSide('answer')}>
                        <div key={flashcards.id} className="flashcard">
                            <h2>{flashcards.question}</h2>
                        </div>
                    </div>
                ) : (
                    <div className="answer-body" onClick={() => setCardSide('question')}>
                        <div key={flashcards.id} className="flashcard">
                            <h2>{flashcards.answer}</h2>
                        </div>
                    </div>
                )}
            </div>
            <div className="flashcard-buttons">
                <button></button>
                <button></button>
            </div>
        </div>
    )
}

export default Flashcards;