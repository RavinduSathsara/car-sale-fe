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

const ViewVehicleInquiry = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`http://127.0.0.1:8000/api/staff/${id}`);

  if (isLoading) {
    return (
      <>
        <Stack spacing={1} sx={{ marginTop: '130px', marginLeft: '230px' }}>
          <Skeleton style={{ borderRadius: 18 }} variant="rectangular" width={600} height={350} />
        </Stack>
      </>
    );
  }
  return (
    <>
      <Page title=" View VehicleInquiry">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              View VehicleInquiry
            </Typography>

            <IconButton component={RouterLink} to="/dashboard/VehicleInquiry">
              <Icon icon="ant-design:rollback-outlined" />
            </IconButton>
          </Stack>

          <Card sx={{ display: 'flex', height: '350px', maxWidth: '600px', marginLeft: '190px', marginTop: '80px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto', margin: '40px' }}>
                <Grid container>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Name :
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        oshini dilunika nawarathna
                      </Typography>{' '}
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={8}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        contact:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        0778495821
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

                  <Grid item sx={{ m: 2 }} xs={4}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Brand:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        audi
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={3}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Model:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        I8
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

export default ViewVehicleInquiry;
