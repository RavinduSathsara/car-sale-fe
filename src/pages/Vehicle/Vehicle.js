import { useState } from 'react';
// material
import { Container, Stack, Typography, Button, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import { VehicleList } from '../../sections/@dashboard/vehicles';
// mock
import PRODUCTS from '../../_mock/products';
import useFetch from '../../hooks/useFetch';

// ----------------------------------------------------------------------

export default function Vehicle() {
  const [openFilter, setOpenFilter] = useState(false);
  const [data] = useFetch('http://127.0.0.1:8000/api/vehicles');

  const deleteVehicle = (id, brand) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://127.0.0.1:8000/api/vehicles/${id}`)
          .then(Swal.fire(`${brand}  Deleted!  `, 'Your file has been deleted.', 'success'));
      }
    });
  };

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Page title="Vehicle">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Vehicles
          </Typography>

          <Button
            variant="contained"
            component={RouterLink}
            to="/dashboard/add-vehicle"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Vehicle
          </Button>
        </Stack>

        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}></Stack>
        </Stack> */}

        <Grid container>
          {data?.Vehicle.slice()
            .reverse()
            .map((item) => (
              <VehicleList
                key={item.id}
                brand={item.brand}
                model={item.model}
                price={item.unit_price}
                modelYear={item.year_manufacture}
                description={item.remarks}
                id={item.id}
                deleteVehicle={deleteVehicle}
                ownership={item.ownership}
              />
            ))}
        </Grid>
      </Container>
    </Page>
  );
}
