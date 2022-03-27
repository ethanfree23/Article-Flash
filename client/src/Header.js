import React from 'react'
import './css/Header.css'

import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="header">
            <div>
                <Link to="/dashboard">
                    <img className="header__logo"
                        src="https://ik.imagekit.io/ethanfree/Article_Flash/Article_Flash_logo_-_updated_hUqFPkQpRFdX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647403428699"
                        alt=""
                    />
                </Link>
            </div>
            <div className="header__links_container">
                <nav>
                    <Link className="header__links_divs" to="/dashboard">Dashboard</Link>
                    <Link className="header__links_divs" to="/my-sets">My Sets</Link>
                    <Link className="header__links_divs" to="/flashcards">Flashcards </Link>
                </nav>
            </div>
        </nav>
    )
}

export default Header;