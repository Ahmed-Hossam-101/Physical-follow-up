import { useState } from 'react'
import './App.css'
import Header from './layouts/header'
import Home from './components/main'
import Whyus from './components/whyus'
import Plans from './components/plans'

function App() {

  return (
    <>
     <Header />
     <Home />
     <Whyus />
     <Plans />
    </>
  )
}

export default App
