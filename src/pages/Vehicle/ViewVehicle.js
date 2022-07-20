import React, { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Card,
  Stack,
  Container,
  Typography,
  IconButton,
  CardMedia,
  Box,
  Grid,
  CardContent,
  Skeleton,
} from '@mui/material';

import { Icon } from '@iconify/react';
import Page from '../../components/Page';
import useFetch from '../../hooks/useFetch';
import { getVehicle } from '../../services/Vehicle';

const ViewVehicle = () => {
  const { id } = useParams();

  const [vehicle, setVehicle] = useState([]);
  const [loading, setLoading] = useState(true);

  const { data: maintenancesData, isLoading: maintenceLoading } = useFetch(`http://127.0.0.1:8000/api/maintenances`);

  // featching data
  const getVehicleData = async (id) => {
    const result = await getVehicle(id);
    setVehicle(result?.data);
    setLoading(false);
  };

  useEffect(() => {
    getVehicleData(id);
  }, []);

  const vehicleMaintenceCost = maintenancesData?.posts.filter((vehicle) => {
    return +vehicle.vehicleid === parseInt(id, 10);
  });

  const arr = [];

  for (let index = 0; index < vehicleMaintenceCost?.length; index += 1) {
    arr.push(parseInt(vehicleMaintenceCost[index]?.cost, 10));
  }

  const sum = arr.reduce((partialSum, a) => partialSum + a, 0);

  if (loading) {
    return (
      <>
        <Stack spacing={1} sx={{ marginTop: '120px', marginLeft: '120px' }}>
          <Skeleton style={{ borderRadius: 18 }} variant="rectangular" width={900} height={700} />
        </Stack>
      </>
    );
  }
  return (
    <>
      <Page title=" View Vehicle">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              View Vehicle
            </Typography>

            <IconButton component={RouterLink} to="/dashboard/vehicle">
              <Icon icon="ant-design:rollback-outlined" />
            </IconButton>
          </Stack>
          <Card sx={{ display: 'flex', height: '700px', maxWidth: '1000px', marginLeft: '90px', marginTop: '80px' }}>
            <CardMedia
              component="img"
              sx={{ width: 300 }}
              image={`http://127.0.0.1:8000/storage/${vehicle?.v_image}`}
            />{' '}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto', margin: '40px' }}>
                <Grid container>
                  {' '}
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Brand :
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {vehicle?.brand}
                      </Typography>{' '}
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Model:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {vehicle?.model}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Make:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {vehicle?.make}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={8}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Year Manufacture:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {vehicle?.year_manufacture}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={8}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Year Registration:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {vehicle?.year_registration}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={8}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Ownership:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {vehicle?.ownership}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Fuel Type:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {vehicle?.fuel_type}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={6}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Chassis No:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {vehicle?.chassis_no}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Reg No:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {vehicle?.reg_no}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={6}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Mileage:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {vehicle?.mileage}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Cost:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {vehicle?.cost}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={6}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Unit Price:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {vehicle?.unit_price}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Margin:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {vehicle?.margin}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={6}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Trans No:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {vehicle?.trans_no}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Availability:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {vehicle?.availability}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Maintence Cost:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {sum.toFixed(2)}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={8}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Remarks:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {vehicle?.remarks}
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Box>
          </Card>
        </Container>
      </Page>
    </>
  );
};

export default ViewVehicle;
