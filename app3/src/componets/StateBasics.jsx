import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    const[name,setname]=useState("Ram")
    const [showName, setShowName] = useState();
    const handleinput=(e)=>{
    setname (e.target.value)
     }
        const handleClick = () => {
            setShowName(name);
    }
  return (
    <div>
      <h1> welcome {showName}</h1>
      <TextField variant='outlined' label='type your name' onChange={handleinput}/>
      <Button variant="contained" onClick={handleClick} style={{ marginLeft: '10px' }}>
        Submit
      </Button>
    </div>
  )
}

export default StateBasics
