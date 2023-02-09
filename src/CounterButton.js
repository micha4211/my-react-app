import React, { useEffect } from 'react';

export const CounterButton = ({ onIncrement, numberOfClicks }) => {
    useEffect(() => {
        console.log("use effect function called");
    }, [numberOfClicks]);
    //can pass props as an arguement to run the useEffect function every time.
    //just leave the array as empty to only
    return (
        <>
        <p>You've clicked the button {numberOfClicks} times</p>
        <button onClick={onIncrement}>Click Me!</button>
        </>
    );
    //added the onIncrement prop with gets the increment function passed to it as a prop
}