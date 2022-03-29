import React from 'react';
import "./css/FunFactList.css"
import FunFact from './FunFact.js';


function FunFactList({ funTrivia }) {
    return (
        <div className="flashcardlist_container">
            <div className="card-grid">
                {funTrivia.map(funFact => {
                    return <FunFact funFact={funFact} key={funFact.id} />
                })}
            </div>
        </div>
    )
}

export default FunFactList