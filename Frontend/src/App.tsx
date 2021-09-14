import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routing } from './routing/Routing'
function App() {
  //test git
  return (
    <div className="bg-background-grey">
      <Router>
        <Routing />
      </Router>
    </div>
  )
}

export default App
