import React from 'react'
import './css/StatCard.css'

function StatCard({ name, country, sets }) {
    return (
        <div className="statCard">
            <h2 className="statCard__h2">{name}</h2>
            <h2 className="statCard__h2">{country}</h2>
            <h2 className="statCard__h2">{sets} # of sets</h2>
        </div>
    )
}

export default StatCard