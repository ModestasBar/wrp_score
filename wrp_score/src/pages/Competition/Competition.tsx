import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  Box,
  TableBody,
} from '@mui/material';
import { styles } from './Competition.styles';
import {
  useGetParticipantsQuery,
  useUpdateParticipantMutation,
} from '../../modules/participantsApi';
import LoadingSpinner from '../../components/LoadingSpinner';
import { competitionHeadColumns, competitionRow } from './Competition.columns';
import SidebarControl from '../../components/SidebarControl';
import GoodLiftNoLift from '../../components/GoodLiftNoLift/GoodLiftNoLift';
import { useState } from 'react';
import CompetitionCell from '../../components/CompetitionCell';
import { IParticipant } from '../../dto/participant.dto';
import {
  calculateBadLift,
  calculateSuccessLift,
} from '../../components/calculation.utils';
import { AttemptName } from '../../dto/game.dto';

export interface ILiftLock {
  tryId: AttemptName;
  participant: IParticipant;
  value: string;
  setIsLoading: (loading: boolean) => void;
}

const Competition = () => {
  const {
    data: participants,
    isLoading,
    isSuccess,
  } = useGetParticipantsQuery(undefined);
  const [update, { isLoading: isUpdating }] =
    useUpdateParticipantMutation(undefined);
  const [liftLock, setLiftLock] = useState<ILiftLock | null>(null);

  const handleLockLift = ({
    tryId,
    participant,
    value,
    setIsLoading,
  }: ILiftLock) => {
    setLiftLock({ tryId, participant, value, setIsLoading });
  };

  const handleGoodLift = async () => {
    if (liftLock?.participant) {
      liftLock.setIsLoading(true);
      await update(calculateSuccessLift(liftLock));
      liftLock.setIsLoading(false);

      setLiftLock(null);
    }
  };

  const handleBadLift = async () => {
    if (liftLock?.participant) {
      liftLock.setIsLoading(true);
      await update(calculateBadLift(liftLock));
      liftLock.setIsLoading(false);

      setLiftLock(null);
    }
  };

  return (
    <Box sx={{ display: 'flex', maxHeight: '82vh', overflowY: 'auto' }} ml={2}>
      <SidebarControl />
      {isLoading && <LoadingSpinner />}
      {isSuccess && (
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              {competitionHeadColumns.map(({ label }, index) => (
                <TableCell key={index} sx={styles.tableCell}>
                  {label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {participants.map((participant, index: number) => (
              <TableRow sx={styles.tableRow} key={index}>
                {competitionRow(participant).map((params, index: number) => (
                  <TableCell key={index} sx={styles.tableCell}>
                    <CompetitionCell
                      handleLiftLock={(lockLift) =>
                        handleLockLift({ ...lockLift, participant })
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
        isLoading={isLoading || isUpdating}
        handleGoodLift={handleGoodLift}
        handleBadLift={handleBadLift}
      />
    </Box>
  );
};

export default Competition;
