import React, { useState } from 'react';
import './App.css';
import { CounterButton } from './CounterButton';
import { Greeting } from './Greeting';
import { CongratulationsMessage } from './CongratulationsMessage';

function App() {

  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);
  const increment = () => setNumberOfClicks(numberOfClicks + 1);
//Need to pass the increment function to the counterbutton component so it knows what to add one
return (
    <div className="App">
      <header className="App-header">
        {hideMessage
          ? null
          : <CongratulationsMessage 
              numberOfClicks={numberOfClicks} 
              threshold={10} 
              onHide={() => setHideMessage(true)} />
        }
        
        <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}/>
      </header>
    </div>
  );
}
export default App;