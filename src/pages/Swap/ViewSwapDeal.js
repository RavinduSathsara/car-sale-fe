import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Card,
  Stack,
  Avatar,
  Button,
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
import LoadingLiner from '../../components/LoadingLiner';
import useFetch from '../../hooks/useFetch';

const ViewSwapDeal = () => {
  const { id } = useParams();
  const { data: swapData, isLoading } = useFetch(`http://127.0.0.1:8000/api/swapvehicle/${id}`);

  return (
    <>
      <Page title=" View SwapDeal">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              View SwapDeal
            </Typography>

            <IconButton component={RouterLink} to="/dashboard/swap">
              <Icon icon="ant-design:rollback-outlined" />
            </IconButton>
          </Stack>
          {isLoading ? (
            <LoadingLiner />
          ) : (
            <Grid container>
              <Grid item sx={{ m: 2 }}>
                <Card sx={{ display: 'flex', height: '980px', width: '520px' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent>
                      <h3 style={{ marginLeft: '170px', marginBottom: '20px' }}> Personal</h3>
                      <Grid container>
                        <Grid item sx={{ m: 2 }}>
                          <Stack direction="row">
                            <Typography component="div" variant="h5">
                              Name :
                            </Typography>
                            <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                              {swapData.name}
                            </Typography>{' '}
                          </Stack>
                        </Grid>
                        <Grid item sx={{ m: 2 }}>
                          <Stack direction="row">
                            <Typography component="div" variant="h5">
                              Contact:
                            </Typography>
                            <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                              {swapData.contact}
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item sx={{ m: 2 }} xs={8}>
                          <Stack direction="row">
                            <Typography component="div" variant="h5">
                              Email:
                            </Typography>
                            <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                              {swapData.email}
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item sx={{ m: 2 }} xs={8}>
                          <Stack direction="row">
                            <Typography component="div" variant="h5">
                              Address:
                            </Typography>
                            <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                              {swapData.address}
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item sx={{ m: 2 }} xs={8}>
                          <Stack direction="row">
                            <Typography component="div" variant="h5">
                              Profession:
                            </Typography>
                            <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                              {swapData.profession}
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item sx={{ m: 2 }}>
                          <Stack direction="row">
                            <Typography component="div" variant="h5">
                              Customer Make :
                            </Typography>
                            <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                              {swapData.cus_make}
                            </Typography>{' '}
                          </Stack>
                        </Grid>{' '}
                        <Grid item sx={{ m: 2 }}>
                          <Stack direction="row">
                            <Typography component="div" variant="h5">
                              Customer Brand:
                            </Typography>
                            <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                              {swapData.cus_brand}
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item sx={{ m: 2 }} xs={8}>
                          <Stack direction="row">
                            <Typography component="div" variant="h5">
                              Customer Model:
                            </Typography>
                            <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                              {swapData.cus_model}
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item sx={{ m: 2 }}>
                          <Stack direction="row">
                            <Typography component="div" variant="h5">
                              Customer year Manufacture:
                            </Typography>
                            <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                              {swapData.cus_year_manufacture}
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item sx={{ m: 2 }}>
                          <Stack direction="row">
                            <Typography component="div" variant="h5">
                              Year Registration:
                            </Typography>
                            <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                              {swapData.year_registration}
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item sx={{ m: 2 }}>
                          <Stack direction="row">
                            <Typography component="div" variant="h5">
                              Customer Ownership:
                            </Typography>
                            <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                              {swapData.cus_ownership}
                            </Typography>
                          </Stack>
                        </Grid>{' '}
                        <Grid item sx={{ m: 2 }} xs={8}>
                          <Stack direction="row">
                            <Typography component="div" variant="h5">
                              Chassis No:
                            </Typography>
                            <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                              {swapData.chassis_no}
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item sx={{ m: 2 }} xs={4}>
                          <Stack direction="row">
                            <Typography component="div" variant="h5">
                              FuelType:
                            </Typography>
                            <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                              {swapData.cus_fuel_type}
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item sx={{ m: 2 }} xs={2}>
                          <Stack direction="row">
                            <Typography component="div" variant="h5">
                              Mileage:
                            </Typography>
                            <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                              {swapData.mileage}
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item sx={{ m: 2 }} xs={8}>
                          <Stack direction="row">
                            <Typography component="div" variant="h5">
                              Remark:
                            </Typography>
                            <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                              {swapData.remarks}
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
              <Grid item sx={{ m: 2 }}>
                <Card sx={{ display: 'flex', height: '500px', width: '520px' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent>
                      <h3 style={{ marginLeft: '170px', marginBottom: '20px' }}> Expecting</h3>
                      <Grid container sx={{ marginLeft: '50px' }}>
                        <Grid item sx={{ m: 2 }} xs={4}>
                          <Stack direction="row">
                            <Typography component="div" variant="h5">
                              Brand:
                            </Typography>
                            <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                              {swapData.brand}
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item sx={{ m: 2 }} xs={6}>
                          <Stack direction="row">
                            <Typography component="div" variant="h5">
                              Model:
                            </Typography>
                            <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                              {swapData.model}
                            </Typography>
                          </Stack>
                        </Grid>{' '}
                        <Grid item sx={{ m: 2 }}>
                          <Stack direction="row">
                            <Typography component="div" variant="h5">
                              Make:
                            </Typography>
                            <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                              {swapData.make}
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item sx={{ m: 2 }} xs={8}>
                          <Stack direction="row">
                            <Typography component="div" variant="h5">
                              Ownership:
                            </Typography>
                            <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                              {swapData.ownership}
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item sx={{ m: 2 }} xs={8}>
                          <Stack direction="row">
                            <Typography component="div" variant="h5">
                              Year Manufacture:
                            </Typography>
                            <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                              {swapData.year_manufacture}
                            </Typography>
                          </Stack>
                        </Grid>{' '}
                        <Grid item sx={{ m: 2 }} xs={8}>
                          <Stack direction="row">
                            <Typography component="div" variant="h5">
                              FuelType:
                            </Typography>
                            <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                              {swapData.fuel_type}
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>{' '}
                    </CardContent>
                  </Box>
                </Card>
                <Grid item sx={{ m: 4 }} style={{ padding: '2px' }}>
                  <Button variant="outlined" color="success" sx={{ margin: '10px' }}>
                    Accept
                  </Button>
                  <Button variant="outlined" color="error" sx={{ margin: '10px' }}>
                    Decline
                  </Button>
                  <Button variant="outlined" color="primary" sx={{ margin: '10px' }}>
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Container>
      </Page>
    </>
  );
};

export default ViewSwapDeal;
