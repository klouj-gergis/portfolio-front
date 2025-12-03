import { useState } from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import Projects from './components/Projects'
import StatusBar from './components/StatusBar'
import Contact from './components/Contact'





function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" w-full bg-background scroll-smooth overflow-hidden"> 
      <HeroSection />
      
    </div>
  )
}

export default App
