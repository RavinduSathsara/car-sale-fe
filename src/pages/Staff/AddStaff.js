import React from 'react';
// import { Grid, Button, Container, Typography } from '@mui/material';
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
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useFormik, Form, FormikProvider } from 'formik';
import axios from 'axios';
// material
import { LoadingButton } from '@mui/lab';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';

const AddStaff = () => {
  return (
    <>
      <Page title="Dashboard: Blog">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Add New Staff
            </Typography>
          </Stack>
          <Grid item xs={8}>
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="First Name"
              // value={inName}
              // onChange={(e) => setName(e.target.value)}
              // error={Boolean(touched.email && errors.email)}
              // helperText={touched.email && errors.email}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="First Name"
              // value={inName}
              // onChange={(e) => setName(e.target.value)}
              // error={Boolean(touched.email && errors.email)}
              // helperText={touched.email && errors.email}
            />
          </Grid>
        </Container>
      </Page>
    </>
  );
};

export default AddStaff;
