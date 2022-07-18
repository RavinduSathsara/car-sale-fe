import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { sample, filter } from 'lodash';
import { faker } from '@faker-js/faker';
import { Link as RouterLink } from 'react-router-dom';

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
  Tooltip,
} from '@mui/material';

import PreviewIcon from '@mui/icons-material/Preview';

// components
import Page from '../../components/Page';

import useFetch from '../../hooks/useFetch';
import LoadingLiner from '../../components/LoadingLiner';
// mock
// import rows from '../../_mock/user';

// ----------------------------------------------------------------------

export default function ViewMaintenance() {
  const { data, isLoading } = useFetch('http://127.0.0.1:8000/api/maintenances');

  console.log('sss', data);
  const rows = [];
  if (data) {
    data?.posts
      .slice()
      .reverse()
      .forEach((item) => {
        rows.push({
          vehicleid: item?.vehicleid,
          maintenance_id: item?.maintenance_id,
          brand: item?.brand,
          chassis_no: item?.chassis_no,
          model: item?.model,
          cost: item?.cost,
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
    <Page title="Maintenance">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Maintenances
          </Typography>
        </Stack>
        <TableContainer component={Paper}>
          {isLoading ? (
            <LoadingLiner />
          ) : (
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell> Vehicle Id</StyledTableCell>
                  <StyledTableCell>Maintenance Id</StyledTableCell>
                  <StyledTableCell>Brand</StyledTableCell>
                  <StyledTableCell>Chassis No</StyledTableCell>
                  <StyledTableCell>Model</StyledTableCell>
                  <StyledTableCell>Cost</StyledTableCell>
                  <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.vehicleid}
                    </StyledTableCell>
                    <StyledTableCell>{row.maintenance_id}</StyledTableCell>
                    <StyledTableCell>{row.brand}</StyledTableCell>
                    <StyledTableCell>{row.chassis_no}</StyledTableCell>
                    <StyledTableCell>{row.model}</StyledTableCell>
                    <StyledTableCell>{row.cost}</StyledTableCell>
                    <StyledTableCell>
                      <IconButton component={RouterLink} to={`/dashboard/ViewMaintenance/${row.id}`}>
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
