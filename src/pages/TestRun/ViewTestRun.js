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

const ViewTestRun = () => {
  const { id } = useParams();
  const { data: testData, isLoading } = useFetch(`http://127.0.0.1:8000/api/testdrive/${id}`);

  if (isLoading) {
    return (
      <>
        <Stack spacing={1} sx={{ marginTop: '130px', marginLeft: '230px' }}>
          <Skeleton style={{ borderRadius: 18 }} variant="rectangular" width={600} height={610} />
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
          <Card sx={{ display: 'flex', height: '610px', maxWidth: '600px', marginLeft: '190px', marginTop: '80px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto', margin: '30px' }}>
                <Grid container>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Name :
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData.name}
                      </Typography>{' '}
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h6">
                        contact:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData.contact}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={8}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Email:
                      </Typography>
                      <Typography variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData.email}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={4}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Profession:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData.profession}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Address:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData.address}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={4}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Make:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData.make}
                      </Typography>
                    </Stack>
                  </Grid>{' '}
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Brand:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData.brand}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }} xs={4}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Model:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData.model}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Ownership:
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData.ownership}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Customer Request :
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData.cus_req}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ m: 2 }}>
                    <Stack direction="row">
                      <Typography component="div" variant="h5">
                        Year Manufacture :
                      </Typography>
                      <Typography component="div" variant="h5" color="text.secondary" sx={{ mx: 1 }}>
                        {testData.year_manufacture}
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

export default ViewTestRun;
