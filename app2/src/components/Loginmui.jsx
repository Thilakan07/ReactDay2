import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
const Loginmui = () => {
  return (
    <div>
      <Typography variant='h1'>welcome back</Typography>
    <TextField variant='outlined'label='Name'/><br /><br />
    <TextField variant='filled'label='Age'/><br /><br />
    <TextField varient ='standard'label='Place'/>
    <br /><br />
    <Button variant='text'>submit</Button>
     <Button varient='contained'>submit</Button>
     <Button varient ='outlined'>submit</Button>
    </div>
  )
}

export default Loginmui
