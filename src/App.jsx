import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Bold } from './Bold/Bold'
import { Workplace } from './Ideal/Workplace'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Bold/>
      <Workplace/>
    </>
  )
}

export default App
