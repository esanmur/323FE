import { useState } from 'react'
import AppBar from './components/AppBar'
import HeroBlockOne from './components/HeroBlockDash'
import EmailForm from './components/EmailForm'
import ActivityForm from './components/CreateActivityForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppBar />
      <HeroBlockOne />
      <EmailForm/>
      <ActivityForm />
    </>
  )
}

export default App
