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
import PreviewIcon from '@mui/icons-material/Preview';
import { Link as RouterLink } from 'react-router-dom';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import LoadingLiner from '../../components/LoadingLiner';
import useFetch from '../../hooks/useFetch';

const Lend = () => {
  const { data, isLoading } = useFetch('http://127.0.0.1:8000/api/lendeds');

  const rows = [];
  if (data) {
    data?.posts
      .slice()
      .reverse()
      .forEach((item) => {
        rows.push({
          id: item?.lendeds_id,
          lendeds_name: item?.lendeds_name,
          lendeds_contact: item?.lendeds_contact,
          model: item?.model,
          chassis_no: item?.chassis_no,
        });
      });
  }
  const deleteLended = (id, lendedsName) => {
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
          .delete(`http://127.0.0.1:8000/api/lendeds/${id}`)
          .then(Swal.fire(`${lendedsName}  Deleted!  `, 'Your file has been deleted.', 'success'));
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
    <Page title="Lendeds">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Lendeds
          </Typography>

          <Button
            variant="contained"
            component={RouterLink}
            to="/dashboard/add-lend"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Lended
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
                  <StyledTableCell> Lended Name</StyledTableCell>
                  <StyledTableCell>Contact</StyledTableCell>
                  <StyledTableCell>Model</StyledTableCell> <StyledTableCell>ChassisNo</StyledTableCell>
                  <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.lended_id}>
                    <StyledTableCell component="th" scope="row">
                      {row.lendeds_name}
                    </StyledTableCell>
                    <StyledTableCell>{row.lendeds_contact}</StyledTableCell>
                    <StyledTableCell>{row.model}</StyledTableCell>
                    <StyledTableCell>{row.chassis_no}</StyledTableCell>{' '}
                    <StyledTableCell>
                      <IconButton
                        component={RouterLink}
                        to={`/dashboard/ViewLend/${row.lended_id}`}
                        onClick={() => {
                          Lend(row.id, row.lendeds_name);
                        }}
                      >
                        <Tooltip title="View">
                          <PreviewIcon />
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

export default Lend;
