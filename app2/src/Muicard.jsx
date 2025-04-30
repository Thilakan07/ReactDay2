import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Muicard = () => {
  return (
    <div>
     <Card sx={{ maxWidth: 500}}>
      <CardMedia
        sx={{ height: 500}}
        image="https://cdn.pixabay.com/photo/2023/12/12/13/03/godzilla-8445252_960_720.jpg"
        title="Godzilla"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          GODZILLA
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Godzilla's Japanese name, is a portmanteau of the Japanese words for gorilla (gorira) and whale (kujira,) the original basis for his design.


        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Muicard
