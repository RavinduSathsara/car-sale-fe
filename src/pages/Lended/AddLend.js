import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Stack,
  Grid,
  Container,
  TextField,
  Typography,
  IconButton,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Swal from 'sweetalert2';

import axios from 'axios';
import { Icon } from '@iconify/react';
// material

import { LoadingButton, DatePicker } from '@mui/lab';
import Page from '../../components/Page';

const AddLend = () => {
  const [lendedsId, setId] = useState('');
  const [lendedsName, setLended] = useState('');
  const [lendedsContact, setLendedContact] = useState('');
  const [lendedsAddress, setAddress] = useState('');
  const [lendedsNic, setLendedsNic] = useState('');
  const [lendedsEmail, setLendedsEmail] = useState('');
  const [model, setModel] = useState('');
  const [chassisNo, setChassisNo] = useState('');

  const handleReset = (event) => {
    event.preventDefault();
    setId('');
    setLended('');
    setLendedContact('');
    setAddress('');
    setLendedsNic('');
    setLendedsEmail('');
    setModel('');
    setChassisNo('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://127.0.0.1:8000/api/lendeds', {
        lendeds_id: `${lendedsId}`,
        lendeds_name: `${lendedsName}`,
        lendeds_contact: `${lendedsContact}`,
        lendeds_address: `${lendedsAddress}`,
        lendeds_nic: `${lendedsNic}`,
        lendeds_email: `${lendedsEmail}`,
        model: `${model}`,
        chassis_no: `${chassisNo}`,
      })

      .then((res) => {
        Swal.fire({
          title: 'New Lendeds added sucessfully !',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
        setId('');
        setLended('');
        setLendedContact('');
        setAddress('');
        setLendedsNic('');
        setLendedsEmail('');
        setModel('');
        setChassisNo('');
      })
      .catch((e) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: e.response.data.message,
        });
      });
  };
  return (
    <>
      <Page title="Add Lendeds">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Newly Lendeds
            </Typography>
            <IconButton component={RouterLink} to="/dashboard/lend">
              <Icon icon="ant-design:rollback-outlined" />
            </IconButton>
          </Stack>
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <Grid container>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  type="text"
                  label="Lended Id"
                  value={lendedsId}
                  onChange={(e) => setId(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  type="text"
                  label="Lended Name"
                  value={lendedsName}
                  onChange={(e) => setLended(e.target.value)}
                />
              </Grid>{' '}
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  type="text"
                  label="Contact"
                  value={lendedsContact}
                  onChange={(e) => setLendedContact(e.target.value)}
                />
              </Grid>{' '}
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  type="text"
                  label="Address"
                  value={lendedsAddress}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>{' '}
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  type="text"
                  label="NIC"
                  value={lendedsNic}
                  onChange={(e) => setLendedsNic(e.target.value)}
                />
              </Grid>{' '}
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  type="text"
                  label="Email"
                  value={lendedsEmail}
                  onChange={(e) => setLendedsEmail(e.target.value)}
                />
              </Grid>{' '}
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  type="text"
                  label="Model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </Grid>{' '}
              <Grid item xs={4} sx={{ m: 2 }}>
                <TextField
                  fullWidth
                  required
                  type="text"
                  label="Chassis No"
                  value={chassisNo}
                  onChange={(e) => setChassisNo(e.target.value)}
                />
              </Grid>{' '}
            </Grid>
            <Grid item xs={5} sx={{ m: 2 }}>
              <LoadingButton style={{ width: 150 }} size="large" type="submit" variant="contained">
                Submit
              </LoadingButton>
              <LoadingButton style={{ width: 150, marginLeft: 10 }} size="large" type="reset" variant="outlined">
                Reset
              </LoadingButton>
            </Grid>
          </form>
        </Container>
      </Page>
    </>
  );
};

export default AddLend;
