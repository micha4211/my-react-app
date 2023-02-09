import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage, NotFoundPage, ProtectedPage } from './pages';
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
      
    <>
      <Router>
        <Link to="/">Home Page |</Link>
        <Link to="/counter"> Counter Page | </Link>
        <Link to="/people"> People Page</Link>
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/counter" element={<CounterButtonPage />} />

            <Route path="/people" element={<PeopleListPage />} />

            <Route path="/protected" element={<ProtectedPage />} />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
    
    </div>
  );
}
export default App;