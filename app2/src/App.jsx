import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loginmui from './components/Loginmui'
import Signupmui from './components/Signupmui'
import Navbar from './components/Navbar'
import Muitable from './components/Muitable'
import Muicard from './Muicard'
import Muigridcard from './components/Muigridcard'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<Routes>
  <Route path='/' element={<Loginmui/>}/>
  <Route path='/c' element={<Muicard/>}/>
  <Route path='/t' element={<Muitable/>}/>
  <Route path='/g' element={<Muigridcard/>}/>
</Routes>
       
    </>
  )
}

export default App
