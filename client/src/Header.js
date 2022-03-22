import React from 'react'
import './css/Header.css'

function Header() {
    return (
        <nav className="header">
            <div>
                <img className="header__logo"
                    src="https://ik.imagekit.io/ethanfree/Article_Flash/Article_Flash_logo_-_updated_hUqFPkQpRFdX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647403428699"
                    alt=""
                />
            </div>
            <div className="header__links_container">
                <div className="header__links_divs">Dashboard</div>
                <div className="header__links_divs">News</div>
                <div className="header__links_divs">+ Make new flash set</div>
            </div>
        </nav>
    )
}

export default Header