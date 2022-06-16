import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Stack, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, Skeleton } from '@mui/material';

const VehicleList = ({ brand, model, price, modelYear, description, id, deleteVehicle, ownership, isLoading, img }) => {
  if (isLoading) {
    return (
      <>
        <Stack spacing={1} sx={{ m: 2 }}>
          <Skeleton style={{ borderRadius: 18 }} variant="rectangular" width={285} height={450} />
        </Stack>
      </>
    );
  }
  return (
    <>
      <Grid item xs={3} sx={{ m: 2 }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="200" image={`http://127.0.0.1:8000/storage/${img}`} alt="vehicle" />
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
              Ownership : {ownership}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions style={{ marginLeft: '8px' }}>
            <Button size="small" component={RouterLink} to={`/dashboard/update-vehicle/${id}`}>
              Update
            </Button>
            <Button
              size="small"
              color="error"
              onClick={() => {
                deleteVehicle(id, brand);
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
