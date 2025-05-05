import { Button, TextField } from '@mui/material'
import React from 'react'

const Main = () => {
  return (
    <div>
      <TextField variant='outlined'label='Product name'/><br /><br />
      <TextField
          variant='outlined'
          label="Describtion"
          multiline
          minRows={4} 
          maxRows={6}/><br /><br />
    <TextField varient ='standard'label='Image link'/>
    <br /><br />
    <TextField varient ='standard'label='Price'/><br /><br />
    <Button varient='contained'style={{color:'blue'}}>submit</Button>
    </div>
  )
}

export default Main
