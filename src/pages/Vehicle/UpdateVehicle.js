import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import moment from 'moment';
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
  Input,
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
import { Icon } from '@iconify/react';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
// material
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { LoadingButton, DatePicker } from '@mui/lab';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import useFetch from '../../hooks/useFetch';

const UpdateVehicle = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`http://127.0.0.1:8000/api/vehicles/${id}`);
  console.log(data);

  useEffect(() => {
    setBrand(data?.brand);
    setModel(data?.model);
    setMake(data?.make);
    setYearOfManufacture(data?.year_manufacture);
    setYearOfRegistration(data?.year_registration);
    setOwnership(data?.ownership);
    setChassisNo(data?.chassis_no);
    setFuelType(data?.fuel_type);
    setRegNo(data?.reg_no);
    setMileAge(data?.mileage);
    setRemarks(data?.remarks);

    setCost(data?.cost);
    setUnitPrice(data?.unit_price);
    setMargin(data?.margin);
  }, [data]);

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [make, setMake] = useState('');
  const [yearOfManufacture, setYearOfManufacture] = useState(Date.now());
  const [yearOfRegistration, setYearOfRegistration] = useState(Date.now());
  const [ownership, setOwnership] = useState('');
  const [chassisNo, setChassisNo] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [regNo, setRegNo] = useState('');
  const [mileAge, setMileAge] = useState('');
  const [remarks, setRemarks] = useState('');
  const [cost, setCost] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [margin, setMargin] = useState('');
  // const [file, setFile] = useState();
  // load initial values

  const handleSubmit = (event) => {
    event.preventDefault();
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios
      .put(`http://127.0.0.1:8000/api/vehicles/${id}`, {
        brand: `${brand}`,
        model: `${model}`,
        make: `${make}`,
        year_manufacture: `${moment(yearOfManufacture).format('YYYY')}`,
        year_registration: `${moment(yearOfRegistration).format('YYYY')}`,
        ownership: `${ownership}`,
        chassis_no: `${chassisNo}`,
        fuel_type: `${fuelType}`,
        reg_no: `${regNo}`,
        mileage: `${mileAge}`,
        remarks: `${remarks}`,
        cost: `${cost}`,
        unit_price: `${unitPrice}`,
        margin: `${margin}`,
        trans_no: `1234`,
        // v_image: `${file}`,
      })
      .then((res) => {
        Swal.fire({
          title: 'Vehicle Update sucessfully !',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
      })
      .catch((e) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: e.response.data.message,
        });
      });

    // setBrand('');
    // setModel('');
    // setMake('');
    // setYearOfManufacture('');
    // setYearOfRegistration('');
    // setOwnership('');
    // setChassisNo('');
    // setFuelType('');
    // setRegNo('');
    // setMileAge('');
    // setRemarks('');
    // setCost('');
    // setUnitPrice('');
    // setMargin('');
    // setFile('');
  };

  const handleReset = (event) => {
    event.preventDefault();
    setBrand('');
    setModel('');
    setMake('');
    setYearOfManufacture('');
    setYearOfRegistration('');
    setOwnership('');
    setChassisNo('');
    setFuelType('');
    setRegNo('');
    setMileAge('');
    setRemarks('');
    setCost('');
    setUnitPrice('');
    setMargin('');
    // setFile('');
  };
  function handleChange(event) {
    // setFile(event.target.files[0]);
  }
  if (isLoading) {
    return <>loading...</>;
  }
  return (
    <div>
      <Page title="Update Vehicle">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Update Vehicle
            </Typography>
            <IconButton component={RouterLink} to="/dashboard/vehicle">
              <Icon icon="ant-design:rollback-outlined" />
            </IconButton>
          </Stack>
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <Grid container>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  autoComplete="username"
                  defaultValue={data?.brand}
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
                  defaultValue={data?.model}
                  // autoComplete="username"
                  type="text"
                  label="Model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Make</InputLabel>
                  <Select
                    required
                    defaultValue={data?.make}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={make}
                    label="Make"
                    onChange={(e) => {
                      setMake(e.target.value);
                    }}
                  >
                    <MenuItem value={'Car'}>Car</MenuItem>
                    <MenuItem value={'Jeep'}>Jeep</MenuItem>
                    <MenuItem value={'Van'}>Van</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={4} sx={{ m: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Ownership</InputLabel>
                  <Select
                    required
                    defaultValue={data?.ownership}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ownership}
                    label="Ownership"
                    onChange={(e) => {
                      setOwnership(e.target.value);
                    }}
                  >
                    <MenuItem value={'First Owner'}>First Owner</MenuItem>
                    <MenuItem value={'Second Owner'}>Second Owner</MenuItem>
                    <MenuItem value={'Third Owner'}>Third Owner</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    defaultValue={data?.year_manufacture}
                    label="Year of make"
                    views={['year']}
                    value={yearOfManufacture}
                    onChange={(newValue) => {
                      setYearOfManufacture(newValue);
                    }}
                    renderInput={(params) => <TextField required fullWidth {...params} />}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={4} sx={{ m: 2 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    defaultValue={data?.year_registration}
                    label="Year of Registration"
                    views={['year']}
                    value={yearOfRegistration}
                    onChange={(newValue) => {
                      setYearOfRegistration(newValue);
                    }}
                    renderInput={(params) => <TextField required fullWidth {...params} />}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  defaultValue={data?.chassis_no}
                  // autoComplete="username"
                  type="number"
                  required
                  label="Chasis No"
                  value={chassisNo}
                  onChange={(e) => {
                    setChassisNo(e.target.value);
                  }}
                  // error={Boolean(touched.email && errors.email)}
                  // helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Fuel Type</InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={data?.fuel_type}
                    value={fuelType}
                    label="Fuel Type"
                    onChange={(e) => {
                      setFuelType(e.target.value);
                    }}
                  >
                    <MenuItem value={'Diesel'}>Diesel</MenuItem>
                    <MenuItem value={'Petrol'}>Petrol</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  // autoComplete="username"
                  defaultValue={data?.reg_no}
                  type="number"
                  required
                  label="Registration No"
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
                  defaultValue={data?.mileage}
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
                  defaultValue={data?.cost}
                  // autoComplete="username"
                  type="number"
                  label="Cost"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  defaultValue={data?.unit_price}
                  // autoComplete="username"
                  type="number"
                  label="Unit Price"
                  value={unitPrice}
                  onChange={(e) => setUnitPrice(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  defaultValue={data?.margin}
                  // autoComplete="username"
                  type="text"
                  label="Margin"
                  value={margin}
                  onChange={(e) => setMargin(e.target.value)}
                />
              </Grid>
            </Grid>

            <Grid item xs={8.75} sx={{ m: 2 }}>
              <TextField
                style={{ width: 800 }}
                required
                defaultValue={data?.remarks}
                // autoComplete="username"
                type="text"
                label="Remarks"
                placeholder="Add yor comment here"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
              />
            </Grid>
            {/* <Grid item xs={8} sx={{ m: 3 }}>
              <FormLabel>
                <Input style={{ display: 'none ' }} accept="image/*" id="contained-button-file" multiple type="file" />
                <IconButton sx={{ ml: -2 }} color="primary" aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
                Upload Image
              </FormLabel>
            </Grid> */}
            <Grid item xs={8} sx={{ m: 3 }}>
              <FormLabel>
                <input type="file" onChange={handleChange} />
              </FormLabel>
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
    </div>
  );
};

export default UpdateVehicle;
