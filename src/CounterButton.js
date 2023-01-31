import React, { useEffect } from 'react';

export const CounterButton = ({ onIncrement, numberOfClicks }) => {
    useEffect(() => {
        console.log("use effect function called");
    }, []);
    //can second arguement that the use effection function would watch for to change.
    //just leave the array as empty to only have the call run when it first loads.
    return (
        <>
        <p>You've clicked the button {numberOfClicks} times</p>
        <button onClick={onIncrement}>Click Me!</button>
        </>
    );
    //added the onIncrement prop with gets the increment function passed to it as a prop
}