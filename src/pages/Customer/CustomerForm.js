import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Link,
  Stack,
  Grid,
  Checkbox,
  Container,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  FormControlLabel,
} from '@mui/material';
import Swal from 'sweetalert2';
import { useFormik, Form, FormikProvider } from 'formik';
import axios from 'axios';
import { Icon } from '@iconify/react';
// material
import { LoadingButton } from '@mui/lab';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import BasicTable from './table';

const CustomerForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');

  const handleReset = (event) => {
    event.preventDefault();
    setFirstName('');
    setLastName('');
    setEmail('');
    setContact('');
    setAddress('');
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/api/customers', {
      name: `${firstName} ${lastName}`,
      contact: `${contact}`,
      address: `${address}`,
      email: `${email}`,
    });

    Swal.fire({
      title: 'New costomer added sucessfully !',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    });

    setFirstName('');
    setLastName('');
    setEmail('');
    setContact('');
    setAddress('');
  };

  return (
    <>
      <Page title="Customer">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Add New Customer
            </Typography>
            <IconButton component={RouterLink} to="/dashboard/add-customer">
              <Icon icon="ant-design:rollback-outlined" />
            </IconButton>
          </Stack>
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <Grid container>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  // autoComplete="username"
                  type="text"
                  label="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  // autoComplete="username"
                  type="text"
                  label="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>{' '}
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  autoComplete="username"
                  type="number"
                  label="Contact No."
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </Grid>{' '}
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  // autoComplete="username"
                  type="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={8.35} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  // autoComplete="username"
                  type="text"
                  required
                  label="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  // error={Boolean(touched.email && errors.email)}
                  // helperText={touched.email && errors.email}
                />
              </Grid>
            </Grid>
            <Grid item xs={5} sx={{ m: 2 }}>
              <LoadingButton
                style={{ width: 150 }}
                size="large"
                type="submit"
                variant="contained"
                // loading={isSubmitting }
              >
                Create
              </LoadingButton>
              <LoadingButton
                style={{ width: 150, marginLeft: 10 }}
                size="large"
                type="reset"
                variant="outlined"
                // loading={isSubmitting }
              >
                Reset
              </LoadingButton>
            </Grid>
          </form>
        </Container>
      </Page>
    </>
  );
};

export default CustomerForm;
