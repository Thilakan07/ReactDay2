import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const View = () => {
    const [inputs, setInputs] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                console.log(res.data);
                setInputs(res.data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <Grid container spacing={2} justifyContent="center">
            {inputs.map((val, i) => (
                <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={val.image}
                            title={val.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {val.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {val.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default View;

