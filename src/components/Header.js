import React from 'react';
import aroundtheus from "../images/aroundtheus.svg";

function Header() {
    return (
        <header className="header">
            <img className="header__img" src={aroundtheus} alt="Around the U.S." />
        </header>
    )
}

export default Header