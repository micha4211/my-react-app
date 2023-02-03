import React from 'react';
import { Greeting } from '../Greeting';

export const HomePage = () => {
    console.log("Home Page");
    return (
        <>
        <h1>The Home page</h1>
        <Greeting name="Mike" numberOfMessages={10} />
        </>
    );
}