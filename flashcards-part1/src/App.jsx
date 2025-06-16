import { useState } from 'react'
import Header from './components/Header'
import Flashcards from './components/Flashcards'

import './App.css'

function App() {

  return (
   <div>
      <Header></Header>
      <img src="/mj-magic.png" alt="" className="mj-magic-image"/>
      <Flashcards></Flashcards>
   </div>
  )
}

export default App
