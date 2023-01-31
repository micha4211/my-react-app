import React from 'react';
import './App.css';
import { CounterButton } from './CounterButton';
import { Greeting } from './Greeting';

function App() {
return (
    <div className="App">
      <header className="App-header">
        <CounterButton/>
        <Greeting name="John" numberOfMessages={2} />
      </header>
    </div>
  );
}
export default App;