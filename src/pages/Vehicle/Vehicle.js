import { useState } from 'react';
// material
import { Container, Stack, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import { VehicleList } from '../../sections/@dashboard/vehicles';
// mock
import PRODUCTS from '../../_mock/products';

// ----------------------------------------------------------------------

export default function Vehicle() {
  const [openFilter, setOpenFilter] = useState(false);

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

        <VehicleList />
      </Container>
    </Page>
  );
}
