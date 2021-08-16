import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { LandingPage } from './Components/landingPage/LandingPage';
import { Routing } from './Components/landingPage/routing/Routing';

import './index.css';

function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}

export default App;
