import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './components/Homepage'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'
import View from './components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Homepage/>
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/m' element={<Main/>}/>
    <Route path='/v' element={<View/>}/>
    </Routes>
    
    
     </>
       
  )
}

export default App
