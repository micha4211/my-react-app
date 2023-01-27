import React from 'react';
import './App.css';
//by doing this it will force the component to stay the same name
import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';
 
const people = [{
  name: 'Jonah',
  age: 7,
  hairColor: 'blonde'
}, {
  name: 'Cathy',
  age: 25,
  hairColor: 'brown'
}, {
  name: 'Austin',
  age: 33,
  hairColor: 'red'
}];

function App() {
 
  //set the string variables here, then wrap them in curly {} where the variable is to 
  //be used.
  let adjective = 'totally cool';
  let url = 'https://reactjs.org'

const displayAlert = () => {
  alert('Hello!');
}

  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Mike" numberOfMessages={10}/>
        <PeopleList people={people} />
        <button onClick={displayAlert}>Click Me!</button>
        <button onClick={() => alert('Hello again!')}>Another click</button>
        <p>
         This is really {adjective}!
        </p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
//to pass objects as props the syntax needs to have double curly braces
// <Greeting person={{ name:"Mike", numberOfMessages: 10}} />