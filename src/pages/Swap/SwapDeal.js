import React, { useEffect, useState } from 'react';
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

import Label from '../../components/Label';
// components
import Page from '../../components/Page';
import LoadingLiner from '../../components/LoadingLiner';
import { getAllSwapVehicle } from '../../services/Swap';
// mock
// import rows from '../../_mock/user';

// ----------------------------------------------------------------------

export default function SwapDeal() {
  const [swapVehicle, setSwapVehicle] = useState([]);
  const [loading, setloading] = useState(true);

  // get all SwapVehicle
  const fetchAllSwapVehicle = async () => {
    try {
      const { data: allSwapVehicle } = await getAllSwapVehicle();
      setSwapVehicle(allSwapVehicle.posts);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllSwapVehicle();
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
          {loading ? (
            <LoadingLiner />
          ) : (
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Full Name</StyledTableCell>
                  <Tooltip title="Custom Model">
                    <StyledTableCell>Cus. Model</StyledTableCell>
                  </Tooltip>
                  <Tooltip title="Request Model">
                    <StyledTableCell>Req. Model</StyledTableCell>
                  </Tooltip>
                  <Tooltip title="Custom Year Of Manufacture">
                    <StyledTableCell>Cus. YOM</StyledTableCell>
                  </Tooltip>
                  <Tooltip title="Request Year Of Month">
                    <StyledTableCell>Req. YOM</StyledTableCell>
                  </Tooltip>
                  <StyledTableCell>Contact</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                  <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {swapVehicle.map((row) => (
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
