import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Vehicles from './pages/Vehicles'
import VehicleDetails from './pages/VehicleDetails'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/vehicles' element={<Vehicles/>}/>
      <Route path='/vehicles/details' element={<VehicleDetails/>}/>



    </Routes>
    </>
  )
}

export default App
