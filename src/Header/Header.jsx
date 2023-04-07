import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/tshirt">T-Shirt</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;