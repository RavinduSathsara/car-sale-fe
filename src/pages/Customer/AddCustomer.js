import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Link,
  Stack,
  Grid,
  Button,
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
import BasicTable from './table';

const AddCustomer = () => {
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
              All Customers
            </Typography>

            <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/add-customer-form"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              New Customer
            </Button>
          </Stack>
          <BasicTable />
        </Container>
      </Page>
    </>
  );
};

export default AddCustomer;
