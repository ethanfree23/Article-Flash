import React from 'react'
import './css/Box.css'

function Box({ type }) {
    return (
        <div className="box">
            <span>
                <p>{type} Name</p> <br />
                <p>Number of terms</p> <br />
            </span>
        </div>
    )
}

export default Box;


{/* name of set, # of terms, avatar, username */ }