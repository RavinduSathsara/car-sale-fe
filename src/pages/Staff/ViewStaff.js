import { useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';

// material
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

// ----------------------------------------------------------------------
import { Icon } from '@iconify/react';
import Page from '../../components/Page';
import Label from '../../components/Label';
import Scrollbar from '../../components/Scrollbar';
import Iconify from '../../components/Iconify';
import SearchNotFound from '../../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../../sections/@dashboard/user';

import useFetch from '../../hooks/useFetch';

const ViewStaff = () => {
  const { id } = useParams();

  const { data: staffData, isLoading } = useFetch(`http://127.0.0.1:8000/api/staff/${id}`);

  console.log(staffData);
  if (isLoading) {
    return (
      <>
        <Stack spacing={1} sx={{ m: 2 }}>
          <Skeleton style={{ borderRadius: 18 }} variant="rectangular" width={285} height={450} />
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

          <Card sx={{ display: 'flex', height: '560px', maxWidth: '1000px' }}>
            <CardMedia component="img" sx={{ width: 250 }} image={`http://127.0.0.1:8000/storage/${staffData.image}`} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Grid container>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Name :
                      </Typography>
                      <Typography variant="h5" color="text.secondary">
                        {staffData.first_name} {staffData.last_name}
                      </Typography>{' '}
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        NIC :
                      </Typography>
                      <Typography variant="h5" color="text.secondary">
                        {staffData.nic}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Typography component="div" variant="h5">
                    Email :
                  </Typography>
                  <Typography component="div" variant="h5" sx={{ m: 2 }}>
                    {staffData.email}
                  </Typography>{' '}
                </Grid>
                <Typography component="div" variant="h5" sx={{ m: 2 }}>
                  DOB : {staffData.d_o_b}
                </Typography>
                <Typography component="div" variant="h5" sx={{ m: 2 }}>
                  gender: {staffData.gender}
                </Typography>
                <Typography component="div" variant="h5" sx={{ m: 2 }}>
                  address: {staffData.address}
                </Typography>
                <Typography component="div" variant="h5" sx={{ m: 2 }}>
                  phone no: {staffData.ph_no}
                </Typography>
                <Typography component="div" variant="h5" sx={{ m: 2 }}>
                  position: {staffData.position}
                </Typography>
                <Typography component="div" variant="h5" sx={{ m: 2 }}>
                  shift: {staffData.shift}
                </Typography>
                <Typography component="div" variant="h5" sx={{ m: 2 }}>
                  salary: Rs {staffData.salary}
                </Typography>
              </CardContent>
              {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}></Box> */}
            </Box>
          </Card>
        </Container>
      </Page>
    </>
  );
};

export default ViewStaff;
