import { Button, TextField } from '@mui/material'
import React from 'react'

const View = () => {
 
  return (
    <div>
        <TextField variant='outlined' label="Name"></TextField> <br></br><br></br>
        <TextField variant='outlined' label="Roll No"></TextField> <br></br><br></br>
        <TextField variant='outlined' label="Course"></TextField> <br></br><br></br>
        <TextField variant='outlined' label="Grade"></TextField><br></br><br></br>
        <Button variant="contained"  style={{ marginLeft: '10px' }}>
        Submit
      </Button>
    </div>
  )
}

export default View
