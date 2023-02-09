import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => (
    <ul>
        <li><Link to="/">Home Page</Link></li>
        <li> <Link to="/counter">Counter Page</Link></li>
        <li><Link to="/people">People Page</Link></li>
        <li><Link to="/forms">Forms</Link></li>
    </ul>
)

