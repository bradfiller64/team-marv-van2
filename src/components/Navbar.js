import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/story" className="nav-link">Story</Link>
                <Link to="/characters" className="nav-link">Characters</Link>
            </div>
            <div className="navbar-right">
                <button className="pre-order-button">Pre-Order Now!</button>
            </div>
        </nav>
    );
}

export default Navbar;