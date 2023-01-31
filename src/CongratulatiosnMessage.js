import React from 'react';

export const CongratulationsMessage = ({numberOfClicks, threshold}) => {
    return numberOfClicks >= threshold 
         ? <h1>Congradulations! You've reached {threshold} clicks.</h1>
         : null;

}