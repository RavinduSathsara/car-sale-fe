import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const VehicleList = () => {
  return (
    <>
      {' '}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
          image="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-b-170811.jpg&fm=jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            BMW I8
          </Typography>
          <Typography gutterBottom variant="h5" component="div" color="text.secondary">
            LKR 4,990,000
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            Model Year : 2018
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            From : Colombo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            vehicle discription here...
          </Typography>
        </CardContent>
        <CardActions style={{ marginLeft: '8px' }}>
          <Button size="small">Update</Button>
          <Button size="small" color="error">
            Remove
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default VehicleList;
