import { AppBar, Box, Button, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

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
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link to="/">
          <Button color="inherit">Login</Button>
          </Link>
          <Link to="/t">
          <Button color="inherit">next</Button>
          </Link>
          <Link to="/g">
          <Button color="inherit">prev</Button>
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
