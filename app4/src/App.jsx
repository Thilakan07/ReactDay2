import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import View from './components/View'
import { Table } from '@mui/material'
import Table1 from './components/Table1'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Navbar/>
    

       <Routes>
       
        <Route path='/' element={<View/>}/>
        <Route path='/t' element={<Table1/>}/>
        <Route path='/a' element={<Add/>}/>
        
       </Routes>
       
    </>
  )
}

export default App
