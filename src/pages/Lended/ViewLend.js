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

const ViewLend = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: LendData, isLoading } = useFetch(`http://127.0.0.1:8000/api/lendeds/${id}`);
  console.log(LendData);

  const removeLend = (id, name) => {
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
          .delete(`http://127.0.0.1:8000/api/lendeds/${id}`)
          .then(Swal.fire(`${name}  Deleted!  `, 'Your file has been deleted.', 'success'));
      }
      navigate('/dashboard/lends');
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
      <Page title=" View Lends">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              View lend
            </Typography>

            <IconButton component={RouterLink} to="/dashboard/lend">
              <Icon icon="ant-design:rollback-outlined" />
            </IconButton>
          </Stack>

          <Card sx={{ display: 'flex', height: '700px', maxWidth: '700px', marginLeft: '190px', marginTop: '80px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto', margin: '40px' }}>
                <Grid container>
                  <Grid item sx={{ m: 2 }} xs={6}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Id :
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {LendData?.lendeds_id}
                      </Typography>{' '}
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Name:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {LendData?.lendeds_name}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={8}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Contact:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {LendData?.lendeds_contact}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={12}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Address:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {LendData?.lendeds_address}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={8}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        NIC:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {LendData?.lendeds_nic}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={5}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Email:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {LendData?.lendeds_email}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={3}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Model:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {LendData?.model}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={3}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Chassis No:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {LendData?.chassis_no}
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>

                <Button
                  onClick={() => {
                    removeLend(id, LendData?.name);
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

export default ViewLend;
