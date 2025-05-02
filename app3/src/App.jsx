import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/Navbar'
import StateBasics from './componets/StateBasics'
import Counter from './componets/Counter'
import New from './componets/New'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/> 
     <Routes>
      <Route path='/' element={<Counter/>}/>
      <Route path='/t' element={<StateBasics/>}/>
      <Route path='/g' element={<New/>}/>

     </Routes>
 

   </>
  )
}

export default App
