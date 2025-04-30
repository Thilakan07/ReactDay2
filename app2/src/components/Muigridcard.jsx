import { Grid } from '@mui/material'
import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
const Muigridcard = () => {
    var data=[
        {
          "name": "Product 1",
          "image": "https://picsum.photos/seed/p1/200/300",
          "price": 19.99
        },
        {
          "name": "Product 2",
          "image": "https://picsum.photos/seed/p2/200/300",
          "price": 29.99
        },
        {
          "name": "Product 3",
          "image": "https://picsum.photos/seed/p3/200/300",
          "price": 39.99
        },
        {
          "name": "Product 4",
          "image": "https://picsum.photos/seed/p4/200/300",
          "price": 49.99
        },
        {
          "name": "Product 5",
          "image": "https://picsum.photos/seed/p5/200/300",
          "price": 59.99
        },
        {
          "name": "Product 6",
          "image": "https://picsum.photos/seed/p6/200/300",
          "price": 69.99
        },
        {
          "name": "Product 7",
          "image": "https://picsum.photos/seed/p7/200/300",
          "price": 79.99
        },
        {
          "name": "Product 8",
          "image": "https://picsum.photos/seed/p8/200/300",
          "price": 89.99
        },
        {
          "name": "Product 9",
          "image": "https://picsum.photos/seed/p9/200/300",
          "price": 99.99
        },
        {
          "name": "Product 10",
          "image": "https://picsum.photos/seed/p10/200/300",
          "price": 109.99
        }
      ]
      
  return (
    <div>
        <Grid container spacing={2}>
            {data.map((val,i)=>{
                return(
                    <Grid size={{xs:6,md:4}}>

<Card sx={{ maxWidth: 500}}>
      <CardMedia
        sx={{ height: 500}}
        image={val.image}
        title="Godzilla"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          IMAGE
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
                    </Grid>
                )
            })}

        </Grid>
      
    </div>
  )
}

export default Muigridcard
