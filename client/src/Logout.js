import React from 'react'
import './Logout.css'

function Logout() {
    return (
        <div className="logout">
            <h1>
                Welcome <span className="user__name">Ethan</span>!
            </h1>
            <button className="logout__btn">Log Out</button>
        </div>
    )
}

export default Logout