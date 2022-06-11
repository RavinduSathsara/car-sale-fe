import React, { useState } from 'react';
// import { Grid, Button, Container, Typography } from '@mui/material';
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

import { Icon } from '@iconify/react';

import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useFormik, Form, FormikProvider } from 'formik';
import axios from 'axios';
// material
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LoadingButton, LocalizationProvider, DatePicker } from '@mui/lab';
import Page from '../../components/Page';

const AddStaff = () => {
  const [value, setValue] = React.useState(null);
  return (
    <>
      <Page title="Dashboard: Blog">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Add New Staff
            </Typography>
            <IconButton component={RouterLink} to="/dashboard/staff">
              <Icon icon="ant-design:rollback-outlined" />
            </IconButton>
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
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Basic example"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Container>
      </Page>
    </>
  );
};

export default AddStaff;
