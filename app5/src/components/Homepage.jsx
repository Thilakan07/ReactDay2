import { MiscellaneousServicesTwoTone } from '@mui/icons-material'
import { AppBar, Box, Button,IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div> <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
         <MiscellaneousServicesTwoTone/> 
        </IconButton>
      
        <Button ><Link to={'/'} style={{color:"white"}}> Home</Link></Button>
        <Box sx={{ flexGrow: 50 }} />
        <Button color="inherit"><Link to={'/m'}style={{color:"white"}}>Add</Link></Button>
        <Button color="inherit"><Link to={'/v'}style={{color:"white"}}>view</Link></Button>
      </Toolbar>
    </AppBar>
  </Box><br /><br /><br/>
      
    </div>
  )
}

export default Homepage
