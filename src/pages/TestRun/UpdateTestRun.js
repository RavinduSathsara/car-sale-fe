import React, { useEffect, useState } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Link,
  Stack,
  Grid,
  Container,
  TextField,
  Typography,
  IconButton,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { Icon } from '@iconify/react';
import { LoadingButton, LocalizationProvider, DatePicker } from '@mui/lab';
import Swal from 'sweetalert2';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { getTestRun } from '../../services/TestRun';
import Page from '../../components/Page';

const UpdateTestRun = () => {
  const [testRunData, setTestRunData] = useState();
  const [loading, setLoading] = useState(true);

  // states
  const [fullName, setFullName] = useState();

  const navigate = useNavigate();

  const { id } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert('Called');
  };

  const fetchTestRun = async (id) => {
    const testRun = await getTestRun(id);
    setTestRunData(testRun.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTestRun(id);
  }, []);

  const handleCancel = (event) => {
    event.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to cancel',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/dashboard/test-run');
      }
    });
  };

  // set initial data
  useEffect(() => {
    setFullName(testRunData?.name);
  }, [loading]);

  return (
    <Page title="Add Staff">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography sx={{ ml: 2 }} variant="h4" gutterBottom>
            Update Test Run
          </Typography>
          <IconButton component={RouterLink} to="/dashboard/test-run">
            <Icon icon="ant-design:rollback-outlined" />
          </IconButton>
        </Stack>
        {loading ? (
          'loading...'
        ) : (
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  defaultValue={fullName}
                  type="text"
                  value={fullName}
                  label="Full Name"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  // defaultValue={data?.first_name}
                  type="number"
                  // value={firstName}
                  label="Contact"
                  // onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  // defaultValue={data?.first_name}
                  type="email"
                  // value={firstName}
                  label="Email"
                  // onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  // defaultValue={data?.first_name}
                  type="text"
                  // value={firstName}
                  label="Profession"
                  // onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={8.4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  // defaultValue={data?.first_name}
                  type="text"
                  // value={firstName}
                  label="Address"
                  // onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Customer Req."
                    // defaultValue={data?.d_o_b}
                    // value={dateOfBirth}
                    // onChange={(newValue) => {
                    //   setDateOfBirth(newValue);
                    // }}
                    renderInput={(params) => <TextField fullWidth {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  // defaultValue={data?.first_name}
                  type="text"
                  // value={firstName}
                  label="Make"
                  // onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  // defaultValue={data?.first_name}
                  type="text"
                  // value={firstName}
                  label="Brand"
                  // onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  // defaultValue={data?.first_name}
                  type="text"
                  // value={firstName}
                  label="Model"
                  // onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  // defaultValue={data?.first_name}
                  type="text"
                  // value={firstName}
                  label="Year of Manufacture"
                  // onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  // defaultValue={data?.first_name}
                  type="text"
                  // value={firstName}
                  label="Ownership"
                  // onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <LoadingButton style={{ width: 150 }} id="sub" size="large" type="submit" variant="contained">
                  Save
                </LoadingButton>
                <LoadingButton
                  style={{ width: 150, marginLeft: 10 }}
                  size="large"
                  onClick={handleCancel}
                  variant="outlined"
                >
                  Cancel
                </LoadingButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Container>
    </Page>
  );
};

export default UpdateTestRun;
