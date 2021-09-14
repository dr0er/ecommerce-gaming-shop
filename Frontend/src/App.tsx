import { BrowserRouter as Router } from 'react-router-dom'
import { Routing } from './routing/Routing'
function App() {
  return (
    <div className="bg-background-grey">
      <Router>
        <Routing />
      </Router>
    </div>
  )
}

export default App
