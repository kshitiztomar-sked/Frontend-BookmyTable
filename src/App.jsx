import { useState } from 'react'
import './App.css'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    
    <Navbar />
    <Hero />
    <Footer />

   </div>
  )
}

export default App
