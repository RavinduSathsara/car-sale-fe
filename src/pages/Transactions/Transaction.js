import React from 'react';
import {
  Table,
  Stack,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  IconButton,
  tableCellClasses,
  styled,
  Paper,
  TableHead,
  Tooltip,
  Button,
} from '@mui/material';
import Swal from 'sweetalert2';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link as RouterLink } from 'react-router-dom';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import LoadingLiner from '../../components/LoadingLiner';
import useFetch from '../../hooks/useFetch';

const Transaction = () => {
  const { data, isLoading } = useFetch('http://127.0.0.1:8000/api/transactions');

  const rows = [];
  if (data) {
    data?.posts
      .slice()
      .reverse()
      .forEach((item) => {
        rows.push({
          id: item?.id,
          brand: item?.brand,
          model: item?.model,
          make: item?.make,
          year_manufacture: item?.year_manufacture,
          year_registration: item?.year_registration,
          chassis_no: item?.chassis_no,
          unit_price: item?.unit_price,
        });
      });
  }
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
          .delete(`http://127.0.0.1:8000/api/transactions/${id}`)
          .then(Swal.fire(`${brand}  Deleted!  `, 'Your file has been deleted.', 'success'));
      }
    });
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },

    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  return (
    <Page title="Transaction">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Transactions
          </Typography>

          <Button
            variant="contained"
            component={RouterLink}
            to="/dashboard/add-transaction"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Transaction
          </Button>
        </Stack>
        <TableContainer component={Paper}>
          {' '}
          {isLoading ? (
            <LoadingLiner />
          ) : (
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell> Brand</StyledTableCell>
                  <StyledTableCell>Model</StyledTableCell>
                  <StyledTableCell>Make</StyledTableCell>{' '}
                  <Tooltip title="Year Manufacture">
                    <StyledTableCell>Year.Manu</StyledTableCell>
                  </Tooltip>
                  <Tooltip title="Year Registration">
                    <StyledTableCell>Year.Reg</StyledTableCell>
                  </Tooltip>
                  <StyledTableCell>ChassisNo</StyledTableCell>
                  <StyledTableCell>UnitPrice</StyledTableCell>
                  <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.brand}
                    </StyledTableCell>
                    <StyledTableCell>{row.make}</StyledTableCell>
                    <StyledTableCell>{row.model}</StyledTableCell>
                    <StyledTableCell>{row.year_manufacture}</StyledTableCell>
                    <StyledTableCell>{row.year_registration}</StyledTableCell>
                    <StyledTableCell>{row.chassis_no}</StyledTableCell>{' '}
                    <StyledTableCell>{row.unit_price}</StyledTableCell>
                    <StyledTableCell>
                      <IconButton
                        color="error"
                        onClick={() => {
                          deleteVehicle(row.id, row.brand);
                        }}
                      >
                        <Tooltip title="Delete">
                          <DeleteIcon />
                        </Tooltip>
                      </IconButton>
                      <IconButton component={RouterLink} to={`/dashboard/add-customer-form/${row.id}`}>
                        <Tooltip title="Add Customer">
                          <AddBoxIcon />
                        </Tooltip>
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Container>
    </Page>
  );
};

export default Transaction;
