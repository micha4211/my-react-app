import React from 'react';
import { Link } from 'react-router-dom';

export const FormsNavBar = () => (
    <ul>
        <li><Link to="/forms/controlled">Controlled Forms</Link></li>
        <li><Link to="/forms/uncontrolled">Uncontrolled Forms</Link></li>
    </ul>
)