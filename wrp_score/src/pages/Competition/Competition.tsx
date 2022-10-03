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
import { IParticipant, TryId } from '../../dto/participant.dto';

export interface ILiftLock {
  tryId: TryId;
  participant: IParticipant;
  value: string;
}

const Competition = () => {
  const {
    data: participants,
    isLoading,
    isSuccess,
  } = useGetParticipantsQuery(undefined);
  const [liftLock, setLiftLock] = useState<ILiftLock | null>(null);

  const handleLockLift = (
    tryId: TryId,
    participant: IParticipant,
    value: string
  ) => {
    setLiftLock({ tryId, participant, value });
  };

  return (
    <Box sx={{ display: 'flex', maxHeight: '80vh', overflowY: 'auto' }}>
      <SidebarControl />
      {isLoading && <LoadingSpinner />}
      {isSuccess && (
        <Table size="small" aria-label="customized table" stickyHeader>
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
                {competitionRow(participant).map((params, index: number) => (
                  <TableCell key={index} sx={styles.tableCell}>
                    <EditableField
                      handleLiftLock={(tryId, value) =>
                        handleLockLift(tryId, participant, value)
                      }
                      {...params}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <GoodLiftNoLift
        isLoading={isLoading}
        handleGoodLift={() => {}}
        handleBadLift={() => {}}
      />
    </Box>
  );
};

export default Competition;
