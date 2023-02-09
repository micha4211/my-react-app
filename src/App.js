import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { 
    HomePage,
    CounterButtonPage,
    PeopleListPage, 
    NotFoundPage, 
    ProtectedPage, 
    ControlledFormPage, 
    UncontrolledFormPage 
  } from './pages';
import './App.css';
import { NavBar } from './NavBar';
import { FormsNavBar} from './FormsNavBar';

function App() {

return (
    <div className="App">  

      <Router>
        <NavBar />
        <div className="App-header">
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/counter" element={<CounterButtonPage />} />
              <Route path="/people" element={<PeopleListPage />} />
              <Route path="/protected" element={<ProtectedPage />} />
              <Route path="/forms" element={<FormsNavBar />} />
                <Route path="/forms/controlled" element={<ControlledFormPage />} />
                <Route path="/forms/uncontrolled" element={<UncontrolledFormPage />} />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
  
    
    </div>
  );
}
export default App;