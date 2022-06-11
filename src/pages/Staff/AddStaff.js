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
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  InputLabel,
  Select,
  Menu,
  MenuItem,
  handleChange,
  // LocalizationProvider,
} from '@mui/material';

import { Icon } from '@iconify/react';

import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useFormik, Form, FormikProvider } from 'formik';
import axios from 'axios';
// material
import { LoadingButton } from '@mui/lab';
import Page from '../../components/Page';

const AddStaff = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [Role, setRole] = useState('');
  const [shift, setShift] = useState('');

  const handleReset = (event) => {
    event.preventDefault();
    setFirstName('');
    setLastName('');
    setEmail('');
    setContact('');
    setAddress('');
    setGender('');
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // setFirstName('');
  // setLastName('');
  // setEmail('');
  // setContact('');
  // setAddress('');
  // setGender('');

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
          <Grid container>
            <Grid item xs={4} sx={{ m: 2 }}>
              <TextField
                fullWidth
                required
                autoComplete=""
                type="text"
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>

            <Grid item xs={4} sx={{ m: 2 }}>
              <TextField
                fullWidth
                required
                autoComplete=""
                type="text"
                label="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>

            <Grid item xs={8.3} sx={{ m: 2 }}>
              <TextField
                fullWidth
                required
                autoComplete=""
                type="text"
                label="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>

            <Grid item xs={4} sx={{ m: 2 }}>
              <TextField
                fullWidth
                required
                autoComplete=""
                type="email"
                label="Email"
                onChange={(e) => setAddress(e.target.value)}
                // error={Boolean(touched.email && errors.email)
              />
            </Grid>
            <Grid item xs={4} sx={{ m: 2 }}>
              <TextField
                fullWidth
                required
                autoComplete="nic"
                type="text"
                label="NIC"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>

            <Grid item xs={4} sx={{ m: 2 }}>
              <TextField
                fullWidth
                required
                autoComplete=""
                type="number"
                label="Contact No."
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </Grid>
            <Grid item xs={4} sx={{ m: 2 }}>
              <FormControl fullWidth>
                <InputLabel text="demo-simple-select-label">Role</InputLabel>
                <Select
                  fullWidth
                  labeltext="demo-simple-select-label"
                  text="demo-simple-select"
                  value="Role"
                  label="Role"
                  onChange={(e) => setRole(e.target.value)}
                  // type="text"
                  // onChange={handleChange}
                >
                  <MenuItem value={1}>Mnager</MenuItem>
                  <MenuItem value={2}>Seller</MenuItem>
                  <MenuItem value={3}>Reception</MenuItem>
                  <MenuItem value={4}>Security</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} sx={{ m: 2 }}>
              <FormControl fullWidth>
                <InputLabel text="demo-simple-select-label">Shift</InputLabel>
                <Select
                  fullWidth
                  labeltext="demo-simple-select-label"
                  text="demo-simple-select"
                  value="shift"
                  label="Shift"
                  onChange={(e) => setShift(e.target.value)}
                  // type="text"
                  // onChange={handleChange}
                >
                  <MenuItem value={5}>Day</MenuItem>
                  <MenuItem value={6}>Swing</MenuItem>

                  <MenuItem value={7}>Night</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <FormControl>
              <FormLabel> Gender </FormLabel>
              <RadioGroup row item xs={4} value={gender} onChange={(e) => setGender(e.target.value)}>
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={5} sx={{ m: 2 }}>
            <LoadingButton style={{ width: 150 }} size="large" type="submit" variant="contained">
              Submit
            </LoadingButton>
            <LoadingButton style={{ width: 150, marginLeft: 10 }} size="large" type="reset" variant="outlined">
              Reset
            </LoadingButton>

            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider> */}
          </Grid>

          {/* // helperText={touched.email && errors.email} */}
          {/* // value={lastName}
          // error={Boolean(touched.email && errors.email)}
          // helperText={touched.email && errors.email} */}
        </Container>
      </Page>
    </>
  );
};

export default AddStaff;
