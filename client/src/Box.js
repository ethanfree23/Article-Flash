import React from 'react'
import './css/Box.css'

function Box({ type }) {
    return (
        <div className="box">
            <h2>{type} Name</h2>
            <h3>Number of terms</h3>
            <div className="box__div">
                <img className="box__image" />
                <h3 className="box__username">username</h3>
            </div>
        </div>
    )
}

export default Box;


{/* name of set, # of terms, avatar, username */ }