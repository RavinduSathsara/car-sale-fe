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
  const { data: inquiryData, isLoading } = useFetch(`http://127.0.0.1:8000/api/vehicle_inquiry/${id}`);
  console.log(inquiryData);

  if (isLoading) {
    return (
      <>
        <Stack spacing={1} sx={{ marginTop: '130px', marginLeft: '230px' }}>
          <Skeleton style={{ borderRadius: 18 }} variant="rectangular" width={700} height={650} />
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

            <IconButton component={RouterLink} to="/dashboard/inquiry">
              <Icon icon="ant-design:rollback-outlined" />
            </IconButton>
          </Stack>

          <Card sx={{ display: 'flex', height: '650px', maxWidth: '700px', marginLeft: '190px', marginTop: '80px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto', margin: '40px' }}>
                <Grid container>
                  <Grid item sx={{ m: 2 }} xs={6}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Name :
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData.name}
                      </Typography>{' '}
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        contact:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData.contact}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={8}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Email:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData.email}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={12}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Address:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData.address}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={8}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Profession:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData.profession}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={5}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Brand:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData.brand}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={3}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Model:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData.model}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={8}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Make:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData.make}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={5}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Payment:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData.payment}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={3}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Insurance:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData.insurance}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={8}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Remark:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData.remarks}
                      </Typography>
                    </Stack>
                  </Grid>

                  <Grid item sx={{ m: 2 }} xs={12}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Customer Request:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData.cus_req}
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
