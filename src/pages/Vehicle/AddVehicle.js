import React, { useState } from 'react';
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
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useFormik, Form, FormikProvider } from 'formik';
import axios from 'axios';
// material
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { LoadingButton, DatePicker } from '@mui/lab';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';

const AddVehicle = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [make, setMake] = useState('');
  const [yom, setYom] = useState('');
  const [yor, setYor] = useState('');
  const [ownership, setOwnership] = useState('');
  const [chassisNo, setChassisNo] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [regNo, setRegNo] = useState('');
  const [mileAge, setMileAge] = useState('');
  const [remarks, setRemarks] = useState('');
  const [timeStamp, setTimeStamp] = useState('');
  const [cost, setCost] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [margin, setMargin] = useState('');

  const handleReset = (event) => {
    event.preventDefault();
    setBrand('');
    setModel('');
    setMake('');
    setYom('');
    setYor('');
    setOwnership('');
    setChassisNo('');
    setFuelType('');
    setRegNo('');
    setMileAge('');
    setRemarks('');
    setTimeStamp('');
    setCost('');
    setUnitPrice('');
    setMargin('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    Swal.fire({
      title: 'New Vehicle added sucessfully !',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    });

    setBrand('');
    setModel('');
    setMake('');
    setYom('');
    setYor('');
    setOwnership('');
    setChassisNo('');
    setFuelType('');
    setRegNo('');
    setMileAge('');
    setRemarks('');
    setTimeStamp('');
    setCost('');
    setUnitPrice('');
    setMargin('');
  };

  const value = '';
  const handleChange = () => {};

  return (
    <>
      <Page title="Dashboard: Blog">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Add New Vehicle
            </Typography>
          </Stack>
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <Grid container>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  // autoComplete="username"
                  type="text"
                  label="Brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  // autoComplete="username"
                  type="text"
                  label="Model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  type="text"
                  label="Make"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  // autoComplete="username"
                  type="text"
                  label="Ownership:"
                  value={ownership}
                  onChange={(e) => setOwnership(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Year of make: "
                    value={value}
                    onChange={(newValue) => {
                      // setValue(newValue);
                    }}
                    renderInput={(params) => <TextField fullWidth {...params} />}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={4} sx={{ m: 2 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Year of rent: "
                    value={value}
                    onChange={(newValue) => {
                      // setValue(newValue);
                    }}
                    renderInput={(params) => <TextField fullWidth {...params} />}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  // autoComplete="username"
                  type="number"
                  required
                  label="Chasis No: "
                  value={chassisNo}
                  onChange={(e) => setChassisNo(e.target.value)}
                  // error={Boolean(touched.email && errors.email)}
                  // helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Fuel Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={fuelType}
                    label="Fuel Type: "
                    onChange={handleChange}
                  >
                    <MenuItem value={'diesel'}>Diesel</MenuItem>
                    <MenuItem value={'petrol'}>Petrol</MenuItem>
                    <MenuItem value={'abcd'}>.....</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  // autoComplete="username"
                  type="number"
                  required
                  label="Registration No: "
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value)}
                  // error={Boolean(touched.email && errors.email)}
                  // helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  // autoComplete="username"
                  type="number"
                  label="Mileage:"
                  value={mileAge}
                  onChange={(e) => setMileAge(e.target.value)}
                />
              </Grid>

              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  // autoComplete="username"
                  type="number"
                  label="Cost:"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  // autoComplete="username"
                  type="number"
                  label="Unit Price: "
                  value={unitPrice}
                  onChange={(e) => setUnitPrice(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  // autoComplete="username"
                  type="text"
                  label="Margin:"
                  value={margin}
                  onChange={(e) => setMargin(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Time Stamps: "
                    value={value}
                    onChange={(newValue) => {
                      // setValue(newValue);
                    }}
                    renderInput={(params) => <TextField fullWidth {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>

            <Grid item xs={8.75} sx={{ m: 2 }}>
              <TextField
                style={{ width: 800 }}
                // autoComplete="username"
                type="text"
                label="Remarks"
                placeholder="Add yor comment here"
                value={margin}
                onChange={(e) => setMargin(e.target.value)}
              />
            </Grid>
            <Grid item xs={5} sx={{ m: 2 }}>
              <LoadingButton
                style={{ width: 150 }}
                size="large"
                type="submit"
                variant="contained"
                // loading={isSubmitting }
              >
                Submit
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
export default AddVehicle;
