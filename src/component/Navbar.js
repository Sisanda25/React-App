import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/home">Home page</Link>
            <Link to="/about">About page</Link>
            <Link to="/profile">Profile page</Link>
        </nav>
    );
}

export default Navbar;


