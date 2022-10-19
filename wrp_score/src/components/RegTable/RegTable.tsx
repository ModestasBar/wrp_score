import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { styles } from './RegTable.styles';
import { registrationFields } from '../RegForm/RegForm.fields';
import { useGetParticipantsQuery } from '../../modules/participants/participantsApi';
import LoadingSpinner from '../LoadingSpinner';

const RegTable: React.FC = () => {
  const { data, isLoading, isSuccess } = useGetParticipantsQuery({});

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {isSuccess && (
        <TableContainer sx={{ mt: 2, overflowX: 'initial' }}>
          <Table stickyHeader aria-label="customized table" size="small">
            <TableHead>
              <TableRow>
                {registrationFields.map(({ label }, index) => (
                  <TableCell key={index} sx={styles.tableHead}>
                    {label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map(
                (
                  {
                    name,
                    surname,
                    gender,
                    bodyWeight,
                    classCategory,
                    birthYear,
                  },
                  index: number
                ) => (
                  <TableRow key={index} sx={styles.tableRow}>
                    <TableCell sx={styles.tableCell}>{name}</TableCell>
                    <TableCell sx={styles.tableCell}>{surname}</TableCell>
                    <TableCell sx={styles.tableCell}>{gender}</TableCell>
                    <TableCell sx={styles.tableCell}>{birthYear}</TableCell>
                    <TableCell sx={styles.tableCell}>{bodyWeight}</TableCell>
                    <TableCell sx={styles.tableCell}>{classCategory}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default RegTable;
