import React from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  Card,
  Stack,
  Avatar,
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

import { Icon } from '@iconify/react';
import Page from '../../components/Page';
import useFetch from '../../hooks/useFetch';

const ViewMaintenance = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: maintenanceData, isLoading } = useFetch(`http://127.0.0.1:8000/api/maintenances/${1}`);
  console.log('id', id);
  const removeMaintenance = (id, brand) => {
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
          .delete(`http://127.0.0.1:8000/api/maintenances/${id}`)
          .then(Swal.fire(`${brand}  Deleted!  `, 'Your file has been deleted.', 'success'));
      }
      navigate('/dashboard/maintenance');
    });
  };

  if (isLoading) {
    return (
      <>
        <Stack spacing={1} sx={{ marginTop: '130px', marginLeft: '230px' }}>
          <Skeleton style={{ borderRadius: 18 }} variant="rectangular" width={600} height={650} />
        </Stack>
      </>
    );
  }
  return (
    <>
      <Page title=" View Maintenance">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              View Maintenance
            </Typography>

            <IconButton component={RouterLink} to="/dashboard/maintenance">
              <Icon icon="ant-design:rollback-outlined" />
            </IconButton>
          </Stack>
          <Card sx={{ display: 'flex', height: '650px', maxWidth: '600px', marginLeft: '190px', marginTop: '80px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto', margin: '30px' }}>
                <Grid container>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        vehicle Id :
                      </Typography>
                      <Typography variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {maintenanceData?.vehicleid}
                      </Typography>{' '}
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Maintenance Id :
                      </Typography>
                      <Typography variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {maintenanceData?.maintenance_id}
                      </Typography>{' '}
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Brand :
                      </Typography>
                      <Typography variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {maintenanceData?.brand}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={8}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Model :
                      </Typography>
                      <Typography variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {maintenanceData?.model}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={8}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Cost :
                      </Typography>
                      <Typography variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {maintenanceData?.cost}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={6}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        ChassisNo :
                      </Typography>
                      <Typography component="div" variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {maintenanceData?.chassis_no}
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>{' '}
                <Button
                  onClick={() => {
                    removeMaintenance(id, maintenanceData?.id);
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

export default ViewMaintenance;
