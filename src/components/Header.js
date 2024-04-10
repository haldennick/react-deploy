//Header.js
import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Carlos Website</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/weather">Weather</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;