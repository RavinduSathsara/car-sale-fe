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
  Input,
  Button,
  label,

  // LocalizationProvider,
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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [shift, setShift] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(Date.now());
  const [salary, setSalary] = useState('');

  const handleReset = (event) => {
    event.preventDefault();
    setFirstName('');
    setLastName('');
    setEmail('');
    setContact('');
    setAddress('');
    setGender('');
    setRole('');
    setShift('');
    setDateOfBirth('');
    setSalary('');
  };

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
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date of birth  "
                  value={dateOfBirth}
                  onChange={(newValue) => {
                    setDateOfBirth(newValue);
                  }}
                  renderInput={(params) => <TextField fullWidth {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={4} sx={{ m: 2 }}>
              <TextField
                fullWidth
                required
                autoComplete=""
                type="number"
                label="salary"
                placeholder="Lkr"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </Grid>

            <Grid item xs={4} sx={{ m: 2 }}>
              <FormControl fullWidth>
                <InputLabel text="demo-simple-select-label">Role</InputLabel>
                <Select
                  fullWidth
                  labeltext="demo-simple-select-label"
                  text="demo-simple-select"
                  value={role}
                  label="Role"
                  onChange={(e) => setRole(e.target.value)}
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
                  value={shift}
                  label="Shift"
                  onChange={(e) => setShift(e.target.value)}
                >
                  <MenuItem value={5}>Day</MenuItem>
                  <MenuItem value={6}>Swing</MenuItem>

                  <MenuItem value={7}>Night</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <FormControl style={{ marginLeft: 20 }}>
              <FormLabel> Gender </FormLabel>
              <RadioGroup row item xs={4} value={gender} onChange={(e) => setGender(e.target.value)}>
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={8} sx={{ m: 3 }}>
            <FormLabel htmlFor="contained-button-file" value="upload" style={{}}>
              <Input accept="image/*" id="contained-button-file" multiple type="file" />
            </FormLabel>
          </Grid>

          <Grid item xs={4} sx={{ m: 6 }}>
            <LoadingButton style={{ width: 150 }} id="sub" size="large" type="submit" variant="contained">
              Submit
            </LoadingButton>
            <LoadingButton style={{ width: 150, marginLeft: 10 }} size="large" id="res" type="reset" variant="outlined">
              Reset
            </LoadingButton>
          </Grid>
        </Container>
      </Page>
    </>
  );
};

export default AddStaff;
