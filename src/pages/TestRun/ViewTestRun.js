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

const ViewTestRun = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: testData, isLoading } = useFetch(`http://127.0.0.1:8000/api/testdrive/${id}`);

  const removeTestRun = (id, name) => {
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
          .delete(`http://127.0.0.1:8000/api/testdrive/${id}`)
          .then(Swal.fire(`${name}  Deleted!  `, 'Your file has been deleted.', 'success'));
      }
      navigate('/dashboard/test-run');
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
      <Page title=" View TestRun">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              View TestRun
            </Typography>

            <IconButton component={RouterLink} to="/dashboard/test-run">
              <Icon icon="ant-design:rollback-outlined" />
            </IconButton>
          </Stack>
          <Card sx={{ display: 'flex', height: '650px', maxWidth: '600px', marginLeft: '190px', marginTop: '80px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto', margin: '30px' }}>
                <Grid container>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Name :
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData?.name}
                      </Typography>{' '}
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        contact:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData?.contact}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={8}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Email:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData?.email}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={4}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Profession:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData?.profession}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Address:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData?.address}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={4}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Make:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData?.make}
                      </Typography>
                    </Stack>
                  </Grid>{' '}
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Brand:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData?.brand}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={4}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Model:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData?.model}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Ownership:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData?.ownership}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Customer Request :
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData?.cus_req}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Year Manufacture :
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData?.year_manufacture}
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>{' '}
                <Button
                  onClick={() => {
                    removeTestRun(id, testData?.name);
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

export default ViewTestRun;
