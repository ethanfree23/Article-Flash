import React from 'react';
import "./css/FlashcardList.css"
import Flashcard from './Flashcard.js';

function FlashCardList({ flashcards }) {
    return (
        <div className="card-grid">
            {flashcards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )
}

export default FlashCardList