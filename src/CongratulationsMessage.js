import React, { useEffect } from 'react';

export const CongratulationsMessage = ({threshold, onHide}) => {

//the hide button that was set will remove the component for the dom
   return (
      <>
      <h1>Congradulations! You've reached {threshold} clicks.</h1>
      <button onClick={onHide}>Hide</button>
      </>
   );
}