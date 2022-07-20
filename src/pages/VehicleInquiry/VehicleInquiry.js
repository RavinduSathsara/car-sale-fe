import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

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

import Page from '../../components/Page';

import LoadingLiner from '../../components/LoadingLiner';
import { getAllVehicleInquiry } from '../../services/VehicleInquiry';

export default function VehicleInquiry() {
  const [vehicleInquiry, setVehicleInquiry] = useState([]);
  const [loading, setloading] = useState(true);

  // get all Transaction
  const fetchAllVehicleInquiry = async () => {
    try {
      const { data: allVehicleInquiry } = await getAllVehicleInquiry();
      setVehicleInquiry(allVehicleInquiry.posts);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllVehicleInquiry();
  }, []);

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
    <Page title="VehicleInquiry">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Vehicle Inquiry
          </Typography>
        </Stack>
        <TableContainer component={Paper}>
          {' '}
          {loading ? (
            <LoadingLiner />
          ) : (
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell> Name</StyledTableCell>
                  <StyledTableCell>Contact</StyledTableCell>
                  <StyledTableCell>Brand</StyledTableCell>
                  <StyledTableCell>Model</StyledTableCell>
                  <Tooltip title="Custom Request">
                    <StyledTableCell>Cus.Req</StyledTableCell>
                  </Tooltip>
                  <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {vehicleInquiry.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell>{row.contact}</StyledTableCell>
                    <StyledTableCell>{row.brand}</StyledTableCell>
                    <StyledTableCell>{row.model}</StyledTableCell>
                    <StyledTableCell>{row.cus_req}</StyledTableCell>

                    <StyledTableCell>
                      <IconButton component={RouterLink} to={`/dashboard/view-vehicle-inquiry/${row.id}`}>
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
