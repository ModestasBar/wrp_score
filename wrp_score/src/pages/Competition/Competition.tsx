import { Table, TableCell, TableHead } from '@mui/material';
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import TableBody from '@mui/material/TableBody/TableBody';
import TableRow from '@mui/material/TableRow/TableRow';
import { styles } from './Competition.styles';
import { useGetParticipantsQuery } from '../../api/participantsApi';
import LoadingSpinner from '../../components/LoadingSpinner';
import { competitionHeadColumns, competitionRow } from './Competition.columns';
import SidebarControl from '../../components/SidebarControl';
import { useState } from 'react';

const Competition = () => {
  const {
    data: participants,
    isLoading,
    isSuccess,
  } = useGetParticipantsQuery({});
  const handleNoLift = () => {};
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex', height: '80vh', overflowY: 'auto' }}>
      <SidebarControl open={open} />
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
            {participants.map((row, index: number) => (
              <TableRow sx={styles.tableRow} key={index}>
                {competitionRow(row).map(({ content }, index) => (
                  <TableCell key={index} sx={styles.tableCell}>
                    {content}
                  </TableCell>
                ))}
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
        <Button onClick={() => setOpen(!open)}>Open drawer</Button>
      </Box>
    </Box>
  );
};

export default Competition;
