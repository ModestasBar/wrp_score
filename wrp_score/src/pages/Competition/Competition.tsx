import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  Box,
  TableBody,
} from '@mui/material';
import { styles } from './Competition.styles';
import { useGetParticipantsQuery } from '../../api/participantsApi';
import LoadingSpinner from '../../components/LoadingSpinner';
import { competitionHeadColumns, competitionRow } from './Competition.columns';
import SidebarControl from '../../components/SidebarControl';
import GoodLiftNoLift from '../../components/GoodLiftNoLift/GoodLiftNoLift';
import { useState } from 'react';
import EditableField from '../../components/EditableField';

const Competition = () => {
  const {
    data: participants,
    isLoading,
    isSuccess,
  } = useGetParticipantsQuery(undefined);
  const [record, setRecord] = useState();

  return (
    <Box sx={{ display: 'flex', maxHeight: '80vh', overflowY: 'auto' }}>
      <SidebarControl />
      {isLoading && <LoadingSpinner />}
      {isSuccess && (
        <Table size='small' aria-label='customized table' stickyHeader>
          <TableHead>
            <TableRow>
              {competitionHeadColumns.map((column, index) => (
                <TableCell key={index} sx={styles.tableCell}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {participants.map((participant, index: number) => (
              <TableRow sx={styles.tableRow} key={index}>
                {competitionRow(participant).map(
                  ({ content, editable }, index) => (
                    <TableCell key={index} sx={styles.tableCell}>
                      {editable ? (
                        <EditableField data={participant} content={content} />
                      ) : (
                        (content as string)
                      )}
                    </TableCell>
                  )
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <GoodLiftNoLift isLoading={isLoading} />
    </Box>
  );
};

export default Competition;
