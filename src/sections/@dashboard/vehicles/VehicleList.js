import React from 'react';
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const VehicleList = ({ brand, model, price, modelYear, description, id }) => {
  return (
    <>
      <Grid item xs={3} sx={{ m: 2 }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="200"
            image="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-b-170811.jpg&fm=jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {brand} {model}
            </Typography>
            <Typography gutterBottom variant="h5" component="div" color="text.secondary">
              LKR {price}
            </Typography>
            <Typography gutterBottom variant="p" component="div">
              Model Year : {modelYear}
            </Typography>
            <Typography gutterBottom variant="p" component="div">
              From : Colombo
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions style={{ marginLeft: '8px' }}>
            <Button size="small">Update</Button>
            <Button
              size="small"
              color="error"
              onClick={() => {
                alert(id);
              }}
            >
              Remove
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default VehicleList;
