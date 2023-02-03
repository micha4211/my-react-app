import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedPage = () => {
    const isAuthed = true;
    return isAuthed 
    ? (
        <h1>Only authorized users should see this!</h1>
    ) : (
        <Navigate to="/" />
    );
}