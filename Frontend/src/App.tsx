import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { LandingPage } from './Components/landingPage/LandingPage';
import { Routing } from './Components/landingPage/routing/Routing';

import './index.css';

function App() {
  return (
    <Router>
      <div className='bg-blue-300'>Test</div>
      <Routing />
    </Router>
  );
}

export default App;
