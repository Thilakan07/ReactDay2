import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import '../App.css'
const Signupmui = () => {
  return (
    <div className='boxx'>
       <Typography variant='h1'>welcome back</Typography>
    <TextField variant='outlined'label='Name'/><br /><br />
    <TextField variant='filled'label='Age'/><br /><br />
    <TextField varient ='standard'label='Place'/>
    <br /><br />
    <Button variant='contained'>submit</Button><br /><br />
      <Button varient='text'>submit</Button><br /><br />
     <Button varient ='outlined'>submit</Button>
    </div>
  )
}

export default Signupmui
