import { Box } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useCallback, useState } from 'react';
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
      {isLoading && 'Loading'}
      {!isLoading && editable && !content ? (
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
          <InputBase
            sx={styles.input}
            placeholder="Kg"
            type="number"
            disabled={lockWeight}
            value={value}
            onChange={({ target: { value } }) => {
              setValue(value);
            }}
          />
          <Divider sx={{ height: 20, m: 0.1 }} orientation="vertical" />
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
