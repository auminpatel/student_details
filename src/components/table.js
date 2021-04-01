/* eslint-disable react/react-in-jsx-scope */
import { useDispatch, useSelector } from 'react-redux';

import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import { useHistory } from 'react-router-dom';
import { deleteStudent, usnKey } from '../redux/action';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function StudentDetails() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const classes = useStyles();
  const history = useHistory();

  const handleDelete = (key) => {
    dispatch(deleteStudent(students[key]));
  };
  const handleEdit = (key) => {
    dispatch(usnKey(key));
    history.push({
      pathname: '/edit',
    });
  };

  const values = Object.values(students);

  useEffect(() => {}, [values, students]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <Delete fontSize="small" />
            </TableCell>
            <TableCell align="left">
              <Edit fontSize="small" />
            </TableCell>
            <TableCell align="left">First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Gender</TableCell>
            <TableCell align="left">Unversity Number</TableCell>
            <TableCell align="left">Birthday</TableCell>
            <TableCell align="left">City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {values.map(({ firstName, lastName, email, gender, date, city, phone, usn }) => (
            <TableRow key={usn}>
              <TableCell align="left">
                <Button onClick={() => handleDelete(usn)} color="secondary">
                  <Delete fontSize="small" />
                </Button>
              </TableCell>
              <TableCell align="left">
                <Button onClick={() => handleEdit(usn)} color="secondary">
                  <Edit fontSize="small" />
                </Button>
              </TableCell>
              <TableCell align="left">{firstName}</TableCell>
              <TableCell align="left">{lastName}</TableCell>
              <TableCell align="left">{phone}</TableCell>
              <TableCell align="left">{email}</TableCell>
              <TableCell align="left">{gender}</TableCell>
              <TableCell align="left">{usn}</TableCell>
              <TableCell align="left">{date}</TableCell>
              <TableCell align="left">{city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StudentDetails;
