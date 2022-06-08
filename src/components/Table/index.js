import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import useFetch from '../../hooks/useFetch';

function createData(name, contact, email, address) {
  return { name, contact, email, address };
}

export default function BasicTable() {
  const [data] = useFetch('http://127.0.0.1:8000/api/customers');

  const rows = [
    createData(data?.post[0]?.name, data?.post[0]?.contact, data?.post[0]?.email, data?.post[0]?.address),
    createData(data?.post[1]?.name, data?.post[1]?.contact, data?.post[1]?.email, data?.post[1]?.address),
    createData(data?.post[2]?.name, data?.post[2]?.contact, data?.post[2]?.email, data?.post[2]?.address),
    createData(data?.post[3]?.name, data?.post[3]?.contact, data?.post[3]?.email, data?.post[3]?.address),
    createData(data?.post[4]?.name, data?.post[4]?.contact, data?.post[4]?.email, data?.post[4]?.address),
    createData(data?.post[5]?.name, data?.post[5]?.contact, data?.post[5]?.email, data?.post[5]?.address),
    createData(data?.post[6]?.name, data?.post[6]?.contact, data?.post[6]?.email, data?.post[6]?.address),
    createData(data?.post[7]?.name, data?.post[7]?.contact, data?.post[7]?.email, data?.post[7]?.address),
    createData(data?.post[8]?.name, data?.post[8]?.contact, data?.post[8]?.email, data?.post[8]?.address),
    createData(data?.post[9]?.name, data?.post[9]?.contact, data?.post[9]?.email, data?.post[9]?.address),
  ];

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
}
