import React, { useState } from 'react';
//since we moved the state to app.js we are not passing the props back to this component
export const CounterButton = ({ onIncrement, numberOfClicks }) => {
//To make the data available to other components the state must be placed in the 
//parent component or the main app.js comp
    //const [numberOfClicks, setNumberOfClicks] = useState(0);
    //const increment = () => setNumberOfClicks(numberOfClicks + 1);
    return (
        <>
        <p>You've clicked the button {numberOfClicks} times</p>
        <button onClick={onIncrement}>Click Me!</button>
        </>
    );
    //added the onIncrement prop with gets the increment function passed to it as a prop
}