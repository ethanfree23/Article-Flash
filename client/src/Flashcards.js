import React from 'react'
import Header from './Header.js';
import FlashcardList from './FlashcardList.js';


function Flashcards({ flashcards }) {
    return (
        <>
            <Header />
            <FlashcardList flashcards={flashcards} />
        </>
    )
}

export default Flashcards