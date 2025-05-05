import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  
    return (
      <div>
        <AppBar> 
          <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Student Details
            </Typography>
            <Link to="/">
            <Button sx={{color:'white'}}>View</Button>
            </Link>
            <Link to="/t">
            <Button sx={{color:'black'}}>Table</Button>
            </Link>
            
            <Link to="/a">
            <Button sx={{color:'black'}}>Add</Button>
            </Link>
  
          </Toolbar>
        </AppBar>
      </Box> 
          </Toolbar>
        </AppBar>
</div>
    )
}


export default Navbar
