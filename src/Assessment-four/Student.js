import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Student() {
  const rows = [
    {
      name: "John",
      age: 24,
      course: "MERN",
      Batch: "October",
      change:<a href="">edit</a>
    },
    {
      name: "Doe",
      age: 25,
      course: "MERN",
      Batch: "October",
      change:<a href="">edit</a>
    },
    {
      name: "Biden",
      age: 33,
      course: "MERN",
      Batch: "September",
      change:<a href="">edit</a>
    },
    {
      name: "Barar",
      age: 27,
      course: "MEAN",
      Batch: "September",
      change:<a href="">edit</a>
    },
    {
      name: "Christ",
      age: 30,
      course: "MERN",
      Batch: "October",
      change:<a href="">edit</a>
    },
    {
      name: "Elent",
      age: 20,
      course: "MERN",
      Batch: "October",
      change:<a href="">edit</a>
    },
  ];
  return (

    <>
    <div id="stn">
      Student Details
      <button id="btnstn">Add New Student</button>
    </div>
    
    <div id="tabledata">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.course}</TableCell>
              <TableCell align="right">{row.Batch}</TableCell>
              <TableCell align="right">{row.change}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
}
export default Student;