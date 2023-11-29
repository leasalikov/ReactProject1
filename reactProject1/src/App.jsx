import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import KeyboardButtons from './assets/components/KeyBoardButtons'
import Style from './assets/components/Style'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <KeyboardButtons/> */}
      <Style/>
    </>
  )
}

export default App