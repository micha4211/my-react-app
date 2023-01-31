import React, { useEffect } from 'react';

export const CongratulationsMessage = ({numberOfClicks, threshold, onHide}) => {
   useEffect(() => {
      return () => console.log('Congratulations Message Unmounting');
   }, []);
//the hide button that was set will remove the component for the dom
   return numberOfClicks >= threshold 
         ? <>
            <h1>Congradulations! You've reached {threshold} clicks.</h1>
            <button onClick={onHide}>Hide</button>
            </>
         : null;

}