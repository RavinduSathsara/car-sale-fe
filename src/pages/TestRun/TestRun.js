import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { sample, filter } from 'lodash';
import { faker } from '@faker-js/faker';
import { Link as RouterLink } from 'react-router-dom';

import Swal from 'sweetalert2';
// material
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
} from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import PreviewIcon from '@mui/icons-material/Preview';
import axios from 'axios';
// components
import Page from '../../components/Page';

import useFetch from '../../hooks/useFetch';
import LoadingLiner from '../../components/LoadingLiner';
// mock
// import rows from '../../_mock/user';

// ----------------------------------------------------------------------

export default function TestRun() {
  const { data, isLoading } = useFetch('http://127.0.0.1:8000/api/testdrive');
  // console.log(data);
  const rows = [];
  if (data) {
    data?.posts
      .slice()
      .reverse()
      .forEach((item) => {
        rows.push({
          id: item?.id,
          name: item?.name,
          brand: item?.brand,
          model: item?.model,
          year: item?.year_manufacture,
          cus_req: item?.cus_req,
        });
      });
  }

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
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  // ----------------------------------------------------------------------

  const removeSwap = (id, name) => {
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
          .delete(`http://127.0.0.1:8000/api/testdrive/${id}`)
          .then(Swal.fire(`${name}  Deleted!  `, 'Your file has been deleted.', 'success'));
      }
    });
  };

  return (
    <Page title="TestRun">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Test Run
          </Typography>
        </Stack>
        <TableContainer component={Paper}>
          {isLoading ? (
            <LoadingLiner />
          ) : (
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell> Name</StyledTableCell>
                  <StyledTableCell>Brand</StyledTableCell>
                  <StyledTableCell>Model</StyledTableCell>
                  <StyledTableCell>Year of Manufacture</StyledTableCell>
                  <StyledTableCell>Customer Request Date and Time</StyledTableCell>
                  <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell>{row.brand}</StyledTableCell>
                    <StyledTableCell>{row.model}</StyledTableCell>
                    <StyledTableCell>{row.year}</StyledTableCell>
                    <StyledTableCell>{row.cus_req}</StyledTableCell>
                    <StyledTableCell>
                      <IconButton color="success">
                        <CheckIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => {
                          removeSwap(row.name);
                        }}
                      >
                        <ClearIcon />
                      </IconButton>
                      <IconButton>
                        <PreviewIcon />
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
}
