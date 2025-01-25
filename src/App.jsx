import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import WhatWeDo from "./pages/whatWeDo/whatWeDo"
import Media from "./pages/media/Media" 
import Contact from "./pages/contact/Contact" 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/whatWeDo' element={<WhatWeDo/>} />
    <Route path='/media' element={<Media/>} />
    <Route path='/contact' element={<Contact/>} />
    </Routes>
    </>
  )
}

export default App
