import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import conn from './api/api'
import testService from './api/testService'
import { Routing } from './routing/Routing'
function App() {
  useEffect(() => {
    console.log('elo')
    conn.setAuthToken('Bearer 422a78c6d95e6e02d5648caac1a3b1e1389d35f196533be2071f51ad80afda28')
    const test = testService.get()
    console.log(test)

    test.then((res) => console.log({ res }))
  }, [])

  return (
    <div className="bg-background-grey">
      <Router>
        <Routing />
      </Router>
    </div>
  )
}

export default App
