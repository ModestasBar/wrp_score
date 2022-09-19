/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState } from 'react';
import { Table, TableCell, TableHead } from '@mui/material';
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import TableBody from '@mui/material/TableBody/TableBody';
import TableRow from '@mui/material/TableRow/TableRow';

import EditableField from '../../components/EditableField';
import { styles } from './Lifting.styles';
import { useGetParticipantsQuery } from '../../api/participantsApi';
import LoadingSpinner from '../../components/LoadingSpinner';

export enum columId {
  Name,
  Gender,
  BodyWeight,
  ClassCategory,
  S1,
  S2,
  S3,
  Total,
  Points,
  Place,
}

const gridColumn = [
  {
    label: 'Name',
    id: columId.Name,
    sx: {
      width: '200px',
      borderRight: '1px solid black',
    },
  },
  {
    label: 'Gender',
    id: columId.Gender,
    sx: {
      width: '100px',
      borderRight: '1px solid black',
    },
  },
  {
    label: 'Body Weight',
    id: columId.BodyWeight,
    sx: {
      width: '100px',
      borderRight: '1px solid black',
    },
  },
  {
    label: 'Category',
    id: columId.ClassCategory,
    sx: {
      width: '100px',
      borderRight: '1px solid black',
    },
  },
  {
    label: 'S1',
    id: columId.S1,
    sx: {
      width: '200px',
      borderRight: '1px solid black',
    },
  },
  {
    label: 'S2',
    id: columId.S2,
    sx: {
      width: '200px',
      borderRight: '1px solid black',
    },
  },
  {
    label: 'S3',
    id: columId.S3,
    sx: {
      width: '200px',
      borderRight: '1px solid black',
    },
  },
  {
    label: 'Best lift',
    id: columId.Total,
  },
  {
    label: 'Points',
    id: columId.Points,
  },
  {
    label: 'Place',
    id: columId.Place,
  },
];

const Lifting = () => {
  const { data, isLoading, isSuccess } = useGetParticipantsQuery({});
  const handleNoLift = () => {};
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {isSuccess && (
        <Table size="small" aria-label="customized table" stickyHeader>
          <TableHead>
            <TableRow>
              {gridColumn.map((colm, index) => (
                <TableCell key={index} sx={styles.tableCell}>
                  {colm.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row: any, index: number) => (
              <TableRow sx={styles.tableRow} key={index}>
                <TableCell sx={styles.tableCell}>
                  {`${row.name} ${row.surname}`}
                </TableCell>
                <TableCell sx={styles.tableCell}>{row.gender}</TableCell>
                <TableCell sx={styles.tableCell}>{row.bodyWeight}</TableCell>
                <TableCell sx={styles.tableCell}>{row.classCategory}</TableCell>
                <TableCell sx={styles.tableCell}>
                  <EditableField />
                </TableCell>
                <TableCell sx={styles.tableCell}>
                  <EditableField />
                </TableCell>
                <TableCell sx={styles.tableCell}>
                  <EditableField />
                </TableCell>
                <TableCell sx={styles.tableCell}>{row.total}</TableCell>
                <TableCell sx={styles.tableCell}>{row.points}</TableCell>
                <TableCell sx={styles.tableCell}>{row.place}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <Box display="flex" position="absolute" bottom={0} right={0} p={2}>
        <Button
          disabled={isLoading}
          color="error"
          variant="contained"
          sx={{ mr: 2 }}
          onClick={handleNoLift}
        >
          No Lift
        </Button>
        <Button color="success" variant="contained" disabled={isLoading}>
          Good Lift
        </Button>
      </Box>
    </>
  );
};

export default Lifting;
