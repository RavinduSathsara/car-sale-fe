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

import useFetch from '../../hooks/useFetch';
import LoadingLiner from '../../components/LoadingLiner';

export default function VehicleInquiry() {
  const { data, isLoading } = useFetch('http://127.0.0.1:8000/api/vehicle_inquiry');
  console.log(data);
  const rows = [];
  if (data) {
    data?.posts
      .slice()
      .reverse()
      .forEach((item) => {
        rows.push({
          id: item.id,
          name: item?.name,
          contact: item?.contact,
          brand: item?.brand,
          model: item?.model,
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
          {isLoading ? (
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
                {rows.map((row) => (
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
