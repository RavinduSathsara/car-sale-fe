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
          <Grid container>
            <Grid item sx={{ m: 2 }}>
              <Card sx={{ display: 'flex', height: '870px', width: '520px' }}>
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
                            oshini
                          </Typography>{' '}
                        </Stack>
                      </Grid>
                      <Grid item sx={{ m: 2 }} xs={3}>
                        <Stack direction="row">
                          <Typography component="div" variant="h5">
                            Contact:
                          </Typography>
                          <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                            0778495821
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item sx={{ m: 2 }} xs={8}>
                        <Stack direction="row">
                          <Typography component="div" variant="h5">
                            Email:
                          </Typography>
                          <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                            oshi@gmail.com
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item sx={{ m: 2 }} xs={8}>
                        <Stack direction="row">
                          <Typography component="div" variant="h5">
                            Address:
                          </Typography>
                          <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                            rathnapura
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item sx={{ m: 2 }} xs={8}>
                        <Stack direction="row">
                          <Typography component="div" variant="h5">
                            Profession:
                          </Typography>
                          <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                            seller
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item sx={{ m: 2 }}>
                        <Stack direction="row">
                          <Typography component="div" variant="h5">
                            Customer Make :
                          </Typography>
                          <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                            Car
                          </Typography>{' '}
                        </Stack>
                      </Grid>{' '}
                      <Grid item sx={{ m: 2 }}>
                        <Stack direction="row">
                          <Typography component="div" variant="h5">
                            Customer Brand:
                          </Typography>
                          <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                            Audi
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item sx={{ m: 2 }} xs={8}>
                        <Stack direction="row">
                          <Typography component="div" variant="h5">
                            Customer Model:
                          </Typography>
                          <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                            vv
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item sx={{ m: 2 }}>
                        <Stack direction="row">
                          <Typography component="div" variant="h5">
                            Customer year Manufacture:
                          </Typography>
                          <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                            2022
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item sx={{ m: 2 }}>
                        <Stack direction="row">
                          <Typography component="div" variant="h5">
                            Year Registration:
                          </Typography>
                          <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                            vv
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item sx={{ m: 2 }}>
                        <Stack direction="row">
                          <Typography component="div" variant="h5">
                            Customer Ownership:
                          </Typography>
                          <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                            First
                          </Typography>
                        </Stack>
                      </Grid>{' '}
                      <Grid item sx={{ m: 2 }}>
                        <Stack direction="row">
                          <Typography component="div" variant="h5">
                            Chassis No:
                          </Typography>
                          <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                            1234
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item sx={{ m: 2 }} xs={6}>
                        <Stack direction="row">
                          <Typography component="div" variant="h5">
                            FuelType:
                          </Typography>
                          <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                            Petrol
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item sx={{ m: 2 }} xs={3}>
                        <Stack direction="row">
                          <Typography component="div" variant="h5">
                            Mileage:
                          </Typography>
                          <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                            1234
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item sx={{ m: 2 }} xs={8}>
                        <Stack direction="row">
                          <Typography component="div" variant="h5">
                            Remark:
                          </Typography>
                          <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                            Good
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
                    <Grid container>
                      <Grid item sx={{ m: 2 }} xs={4}>
                        <Stack direction="row">
                          <Typography component="div" variant="h5">
                            Brand:
                          </Typography>
                          <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                            Audi
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item sx={{ m: 2 }} xs={6}>
                        <Stack direction="row">
                          <Typography component="div" variant="h5">
                            Model:
                          </Typography>
                          <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                            ee
                          </Typography>
                        </Stack>
                      </Grid>{' '}
                      <Grid item sx={{ m: 2 }}>
                        <Stack direction="row">
                          <Typography component="div" variant="h5">
                            Make:
                          </Typography>
                          <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                            ee
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item sx={{ m: 2 }} xs={8}>
                        <Stack direction="row">
                          <Typography component="div" variant="h5">
                            Ownership:
                          </Typography>
                          <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                            ee
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item sx={{ m: 2 }} xs={8}>
                        <Stack direction="row">
                          <Typography component="div" variant="h5">
                            Year Manufacture:
                          </Typography>
                          <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                            2020
                          </Typography>
                        </Stack>
                      </Grid>{' '}
                      <Grid item sx={{ m: 2 }} xs={8}>
                        <Stack direction="row">
                          <Typography component="div" variant="h5">
                            FuelType:
                          </Typography>
                          <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                            petrol
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>{' '}
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Page>
    </>
  );
};

export default ViewSwapDeal;
