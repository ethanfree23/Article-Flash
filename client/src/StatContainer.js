import React from 'react'
import './css/StatContainer.css'
import StatCard from './StatCard.js'

function StatContainer({ name, country, sets }) {
    return (
        <div className="statContainer">
            <h1>Stat Container</h1><br />
            <StatCard name={name} country={country} sets={sets} />
        </div>
    )
}

export default StatContainer;