import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/story">Story</Link></li>
                <li><Link to="/characters">Characters</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;