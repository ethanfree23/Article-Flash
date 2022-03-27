import React from 'react'
import { Link } from 'react-router-dom'

import Header from './Header.js';
import FlashcardList from './FlashcardList.js';
import CardList from './features/CardList.jsx'


function Flashcards({ flashcards }) {
    return (
        <>
            <Header />
            <div>
                <Link to="/add-card"> add a card</Link>
            </div>
            <FlashcardList flashcards={flashcards} />
            <CardList />
        </>
    )
}

export default Flashcards