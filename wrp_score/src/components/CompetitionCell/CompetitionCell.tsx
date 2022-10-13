import { Backdrop, Box, CircularProgress, Input } from '@mui/material';
import { useCallback, useState } from 'react';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styles } from './CompetitionCell.styles';
import { ICompRow } from '../../pages/Competition/Competition.columns';
import { STryStatus } from '../../dto/participant.dto';
import { ILiftLock } from '../../pages/Competition/Competition';

interface IProps extends ICompRow {
  handleLiftLock: (params: Omit<ILiftLock, 'participant'>) => void;
}

const CompetitionCell: React.FC<IProps> = ({
  content,
  editable,
  handleLiftLock,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [lockWeight, setLockWeight] = useState(false);
  const [value, setValue] = useState(editable?.data.weight ?? '');

  const handleLockClick = useCallback(() => {
    setLockWeight(!lockWeight);

    if (editable?.editableId) {
      handleLiftLock({ tryId: editable.editableId, setIsLoading, value });
    }
  }, [lockWeight, editable]);

  const LockComponent = lockWeight ? LockOutlinedIcon : LockOpenOutlinedIcon;
  return (
    <>
      {editable && !content ? (
        <Box
          sx={[
            styles.box,
            editable.data.status === STryStatus.PENDING &&
              lockWeight &&
              styles.boxReady,
            editable.data.status === STryStatus.SUCCESS && styles.boxSuccess,
            editable.data.status === STryStatus.FAIL && styles.boxFail,
          ]}
        >
          {isLoading && (
            <Backdrop
              sx={{
                backgroundColor: '#f1f1f142',
                color: '#2a29325c',
                zIndex: 1221,
                position: 'absolute',
              }}
              open={true}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
          <Input
            sx={styles.input}
            placeholder="Kg"
            disabled={lockWeight || isLoading}
            value={value}
            onChange={({ target: { value } }) => {
              setValue(value);
            }}
          />
          <IconButton color="primary" aria-label="directions">
            <LockComponent onClick={handleLockClick} />
          </IconButton>
        </Box>
      ) : (
        content
      )}
    </>
  );
};

export default CompetitionCell;
