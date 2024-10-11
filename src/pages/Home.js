import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return(
        <div>
            <h1>Home Page</h1>
            <p>Welcome to my homepage</p>
            <p>This is a simple Single Page Application.</p>
            <p>Here are some things you can do:</p>
            <ul>
                <li>
                    <Link to="/home">Learn About this App</Link>
                </li>
                <li>
                    <Link to="/about">Learn about me</Link>
                </li>
                <li>
                    <Link to="profile">View My Profile</Link>
                </li>
            </ul>


        </div>
    );
}

