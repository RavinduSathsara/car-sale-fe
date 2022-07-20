import { useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';

// material
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

// ----------------------------------------------------------------------
import { Icon } from '@iconify/react';
import Page from '../../components/Page';

import LoadingLiner from '../../components/LoadingLiner';
import useFetch from '../../hooks/useFetch';

const ViewStaff = () => {
  const { id } = useParams();

  const { data: staffData, isLoading } = useFetch(`http://127.0.0.1:8000/api/staff/${id}`);

  if (isLoading) {
    return (
      <>
        <Stack spacing={1} sx={{ marginTop: '85px', marginLeft: '30px' }}>
          <Skeleton style={{ borderRadius: 18 }} variant="rectangular" width={1150} height={490} />
        </Stack>
      </>
    );
  }
  return (
    <>
      <Page title="View Staff">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              View Staff
            </Typography>

            <IconButton component={RouterLink} to="/dashboard/staff">
              <Icon icon="ant-design:rollback-outlined" />
            </IconButton>
          </Stack>

          <Card sx={{ display: 'flex', height: '500px', maxWidth: '1500px' }}>
            <CardMedia
              component="img"
              sx={{ width: 300, height: 300, margin: '20px' }}
              image={`http://127.0.0.1:8000/storage/${staffData.image}`}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto', margin: '40px' }}>
                <Grid container>
                  <Grid item>
                    <Stack direction="row" xs={12}>
                      <Typography variant="h3" sx={{ mx: 1 }}>
                        {staffData?.first_name} {staffData.last_name}
                      </Typography>{' '}
                    </Stack>{' '}
                    <Stack direction="row" sx={{ m: 1, fontWeight: 'bold' }}>
                      <Typography component="div" variant="p" color="text.secondary">
                        DOB : {staffData?.d_o_b}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 1, marginTop: '50px' }} xs={12}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Email :
                      </Typography>
                      <Typography variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {staffData?.email}
                      </Typography>
                    </Stack>
                  </Grid>{' '}
                  <Grid item sx={{ m: 1 }} xs={6}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        NIC :
                      </Typography>
                      <Typography variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {staffData?.nic}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 1 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Gender :
                      </Typography>
                      <Typography component="div" variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {staffData?.gender}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 1 }} xs={12}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Address :
                      </Typography>
                      <Typography component="div" variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {staffData?.address}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 1 }} xs={6}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Phone no :
                      </Typography>
                      <Typography component="div" variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {staffData?.ph_no}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 1 }} xs={6}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Position :
                      </Typography>
                      <Typography component="div" variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {staffData?.position}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 1 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Shift :
                      </Typography>
                      <Typography component="div" variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {staffData?.shift}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 1 }} xs={12}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        Salary : Rs
                      </Typography>
                      <Typography component="div" variant="h6" color="text.secondary" sx={{ mx: 1 }}>
                        {staffData?.salary}
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

export default ViewStaff;
