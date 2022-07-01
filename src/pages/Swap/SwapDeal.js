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
import Label from '../../components/Label';
// components
import Page from '../../components/Page';

import useFetch from '../../hooks/useFetch';
import LoadingLiner from '../../components/LoadingLiner';

// mock
// import rows from '../../_mock/user';

// ----------------------------------------------------------------------

export default function SwapDeal() {
  const { data, isLoading } = useFetch('http://127.0.0.1:8000/api/swapvehicle');

  const rows = [];
  if (data) {
    data?.posts
      .slice()
      .reverse()
      .forEach((item) => {
        rows.push({
          id: item.id,
          name: item?.name,
          cus_model: item?.cus_model,
          model: item?.model,
          cus_year_manufacture: item?.cus_year_manufacture,
          year: item?.year_manufacture,
          contact: item?.contact,
          decision: item?.decision,
          // moblieNum: item?.ph_no,
          // salary: item?.salary,
          // shift: item?.shift,
          // role: item?.position,
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

  return (
    <Page title="SwapDeal">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            SwapDeal
          </Typography>
        </Stack>
        <TableContainer component={Paper}>
          {isLoading ? (
            <LoadingLiner />
          ) : (
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Full Name</StyledTableCell>
                  <StyledTableCell>Cus. Model</StyledTableCell>
                  <StyledTableCell>Req. Model</StyledTableCell>
                  <StyledTableCell>Cus. YOM</StyledTableCell>
                  <StyledTableCell>Req. YOM</StyledTableCell>
                  <StyledTableCell>Contact</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                  <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell>{row.cus_model}</StyledTableCell>
                    <StyledTableCell>{row.model}</StyledTableCell>
                    <StyledTableCell>{row.cus_year_manufacture}</StyledTableCell>
                    <StyledTableCell>{row.year}</StyledTableCell>
                    <StyledTableCell>{row.contact}</StyledTableCell>
                    <StyledTableCell>
                      <Label variant="ghost">{row.decision === 1 ? 'Accepted' : 'Pending'}</Label>
                      {console.log(row.decision)}
                    </StyledTableCell>

                    <StyledTableCell>
                      <IconButton component={RouterLink} to={`/dashboard/view-swap-deal/${row.id}`}>
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
