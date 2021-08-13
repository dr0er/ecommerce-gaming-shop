import React from "react";
import { LandingPage } from "./Components/landingPage/LandingPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routing } from "./Components/landingPage/routing/Routing";

function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}

export default App;
