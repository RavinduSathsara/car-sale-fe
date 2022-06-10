import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import useFetch from '../../hooks/useFetch';

const BasicTable = () => {
  const [data] = useFetch('http://127.0.0.1:8000/api/customers');

  console.log(data);

  const rows = [];
  if (data) {
    data?.customer
      .slice()
      .reverse()
      .forEach((item) => {
        rows.push({
          name: item?.name,
          contact: item?.contact,
          email: item?.email,
          address: item?.address,
        });
      });
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align="left">contact</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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
    </TableContainer>
  );
};

export default BasicTable;
