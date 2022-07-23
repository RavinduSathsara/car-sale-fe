import React from 'react';
import moment from 'moment';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import useFetch from '../../hooks/useFetch';
import LoadingLiner from '../../components/LoadingLiner';

const BasicTable = () => {
  const { data, isLoading, error } = useFetch('http://127.0.0.1:8000/api/customers');

  const rows = [];
  if (data) {
    data?.customer
      .slice()
      .reverse()
      .forEach((item) => {
        rows.push({
          id: item?.id,
          name: item?.name,
          contact: item?.contact,
          email: item?.email,
          address: item?.address,
          created_at: `${moment(item?.created_at).endOf('day').fromNow()}`,
        });
      });
  }

  if (isLoading) {
    return <LoadingLiner />;
  }
  if (error) {
    return (
      <>
        <Typography color="error" variant="h6">
          Something went wrong !{' '}
        </Typography>
      </>
    );
  }
  return (
    <TableContainer component={Paper}>
      <Box style={{ maxHeight: '100vh' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ background: ' #ffebee' }}>
              <TableCell align="left">Id</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell align="left">Contact</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">{row.id}</TableCell>{' '}
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.contact}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </TableContainer>
  );
};

export default BasicTable;
