import { useState } from 'react'
import LandingSection from './conponents/LandingSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen w-full" >
      <LandingSection />
    </div>
  )
}

export default App
