import React from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Card,
  Stack,
  Button,
  Container,
  Typography,
  IconButton,
  Box,
  Grid,
  CardContent,
  Skeleton,
} from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';

import { Icon } from '@iconify/react';
import Page from '../../components/Page';

import useFetch from '../../hooks/useFetch';

const ViewVehicleInquiry = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: inquiryData, isLoading } = useFetch(`http://127.0.0.1:8000/api/vehicle_inquiry/${id}`);

  const removeInquiry = (id, name) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://127.0.0.1:8000/api/vehicle_inquiry/${id}`)
          .then(Swal.fire(`${name}  Deleted!  `, 'Your file has been deleted.', 'success'));
      }
      navigate('/dashboard/inquiry');
    });
  };

  if (isLoading) {
    return (
      <>
        <Stack spacing={1} sx={{ marginTop: '130px', marginLeft: '230px' }}>
          <Skeleton style={{ borderRadius: 18 }} variant="rectangular" width={700} height={700} />
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

          <Card sx={{ display: 'flex', height: '700px', maxWidth: '700px', marginLeft: '190px', marginTop: '80px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto', margin: '40px' }}>
                <Grid container>
                  <Grid item sx={{ m: 2 }} xs={6}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Name :
                      </Typography>
                      <Typography variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData?.name}
                      </Typography>{' '}
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        contact :
                      </Typography>
                      <Typography variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData?.contact}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={8}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Email :
                      </Typography>
                      <Typography variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData?.email}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={12}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Address :
                      </Typography>
                      <Typography variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData?.address}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={8}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Profession :
                      </Typography>
                      <Typography variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData?.profession}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={5}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Brand :
                      </Typography>
                      <Typography component="div" variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData?.brand}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={3}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Model :
                      </Typography>
                      <Typography component="div" variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData?.model}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={8}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Make :
                      </Typography>
                      <Typography component="div" variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData?.make}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={5}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Payment :
                      </Typography>
                      <Typography component="div" variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData?.payment}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={3}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Insurance :
                      </Typography>
                      <Typography component="div" variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData?.insurance}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={8}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Remark :
                      </Typography>
                      <Typography component="div" variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData?.remarks}
                      </Typography>
                    </Stack>
                  </Grid>

                  <Grid item sx={{ m: 2 }} xs={12}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Customer Request :
                      </Typography>
                      <Typography component="div" variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {inquiryData?.cus_req}
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>

                <Button
                  onClick={() => {
                    removeInquiry(id, inquiryData?.name);
                  }}
                  variant="outlined"
                  color="error"
                  sx={{ margin: '20px' }}
                >
                  Delete
                </Button>
              </CardContent>
            </Box>
          </Card>
        </Container>
      </Page>
    </>
  );
};

export default ViewVehicleInquiry;
