import React from 'react'
import { Link } from 'react-router-dom'

import Header from './Header.js';
import FlashcardList from './FunFactList.js';


function FunTrivia({ funTrivia }) {

    
    return (
        <>
            <Header />
            <FlashcardList funTrivia={funTrivia} />
        </>
    )
}

export default FunTrivia