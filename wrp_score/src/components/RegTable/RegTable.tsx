import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';
import { styles } from './RegTable.styles';
import { registrationFields } from '../RegForm/RegForm.fields';
import {
  useDeleteParticipantMutation,
  useGetParticipantsQuery,
} from '../../modules/participantsApi';
import LoadingSpinner from '../LoadingSpinner';
import { IParticipant } from '../../dto/participant.dto';

const RegTable = () => {
  const { data, isLoading, isSuccess } = useGetParticipantsQuery({});
  const [deleteParticipant, { isLoading: isDeleting }] =
    useDeleteParticipantMutation(undefined);

  const handleUserDelete = async (participant: IParticipant) => {
    await deleteParticipant(participant);
  };

  return (
    <>
      {isLoading && isDeleting && <LoadingSpinner />}
      {isSuccess && (
        <TableContainer sx={{ mt: 2, overflowX: 'initial' }}>
          <Table stickyHeader aria-label="customized table" size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={styles.tableHead}>No.</TableCell>
                {registrationFields.map(({ label }, index) => (
                  <TableCell key={index} sx={styles.tableHead}>
                    {label}
                  </TableCell>
                ))}
                <TableCell sx={styles.tableHead}>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((contestant, index: number) => (
                <TableRow key={index} sx={styles.tableRow}>
                  <TableCell sx={styles.numericCell}>{`${
                    index + 1
                  }.`}</TableCell>
                  <TableCell sx={styles.tableCell}>{contestant.name}</TableCell>
                  <TableCell sx={styles.tableCell}>
                    {contestant.surname}
                  </TableCell>
                  <TableCell sx={styles.tableCell}>
                    {contestant.gender}
                  </TableCell>
                  <TableCell sx={styles.tableCell}>
                    {contestant.birthYear}
                  </TableCell>
                  <TableCell sx={styles.tableCell}>
                    {contestant.bodyWeight}
                  </TableCell>
                  <TableCell sx={styles.tableCell}>
                    {contestant.classCategory}
                  </TableCell>
                  <TableCell sx={styles.deleteCell}>
                    <DeleteIcon
                      sx={styles.deleteIcon}
                      onClick={() => handleUserDelete(contestant)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default RegTable;
