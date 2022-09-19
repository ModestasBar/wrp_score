import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { styles } from './RegTable.styles';
import { registrationFields } from '../RegForm/fields';
import { useGetParticipantsQuery } from '../../api/participantsApi';

const RegTable: React.FC = () => {
  const { data, error, isLoading, isSuccess } = useGetParticipantsQuery({});

  return (
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
              }: any,
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
  );
};

export default RegTable;
