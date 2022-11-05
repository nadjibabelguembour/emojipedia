import { useState } from 'react'
import Entry from './components/Entry'
import emojipedia from './emojipedia'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
      <Entry data={emojipedia} /> 
      </div>
    </div>
  )
}

export default App
