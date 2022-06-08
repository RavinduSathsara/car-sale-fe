import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function createData(name, contact, email, address) {
  return { name, contact, email, address };
}

export default function BasicTable() {
  const [coustomers, setCostomers] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/customers').then((resp) => {
      setCostomers(resp.data.post);
    });
  }, []);

  console.log(coustomers);

  const rows = [
    createData(coustomers[0]?.name, coustomers[0]?.contact, coustomers[0]?.email, coustomers[0]?.address),
    createData(coustomers[1]?.name, coustomers[1]?.contact, coustomers[1]?.email, coustomers[1]?.address),
    createData(coustomers[2]?.name, coustomers[2]?.contact, coustomers[2]?.email, coustomers[2]?.address),
    createData(coustomers[3]?.name, coustomers[3]?.contact, coustomers[3]?.email, coustomers[3]?.address),
    createData(coustomers[4]?.name, coustomers[4]?.contact, coustomers[4]?.email, coustomers[4]?.address),
    createData(coustomers[5]?.name, coustomers[5]?.contact, coustomers[5]?.email, coustomers[5]?.address),
    createData(coustomers[6]?.name, coustomers[6]?.contact, coustomers[6]?.email, coustomers[6]?.address),
    createData(coustomers[7]?.name, coustomers[7]?.contact, coustomers[7]?.email, coustomers[7]?.address),
    createData(coustomers[8]?.name, coustomers[8]?.contact, coustomers[8]?.email, coustomers[8]?.address),
    createData(coustomers[9]?.name, coustomers[9]?.contact, coustomers[9]?.email, coustomers[9]?.address),
    createData(coustomers[10]?.name, coustomers[10]?.contact, coustomers[10]?.email, coustomers[10]?.address),
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
