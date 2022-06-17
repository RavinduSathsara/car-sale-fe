import { useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';

// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  IconButton,
} from '@mui/material';

// ----------------------------------------------------------------------
import Page from '../../components/Page';
import Label from '../../components/Label';
import Scrollbar from '../../components/Scrollbar';
import Iconify from '../../components/Iconify';
import SearchNotFound from '../../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../../sections/@dashboard/user';
import useFetch from '../../hooks/useFetch';

const ViewStaff = () => {
  const { id } = useParams();

  const { data: staffData, isLoading } = useFetch(`http://127.0.0.1:8000/api/staff/${id}`);

  console.log(staffData);

  return (
    <>
      <Page title="View Staff">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              View Staff
            </Typography>

            <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/add-staff"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              New Staff
            </Button>
          </Stack>
        </Container>
      </Page>
    </>
  );
};

export default ViewStaff;
