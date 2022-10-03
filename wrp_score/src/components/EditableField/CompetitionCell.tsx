import { Box } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';
import { styles } from './CompetitionCell.styles';
import { ICompRow } from '../../pages/Competition/Competition.columns';
import { STryStatus, TryId } from '../../dto/participant.dto';

interface IProps extends ICompRow {
  handleLiftLock: (tryId: TryId, value: string) => void;
}

const RenderCell: React.FC<IProps> = ({
  content,
  editable,
  handleLiftLock,
}) => {
  const [lockWeight, setLockWeight] = useState(false);
  const [readyToLift, setReadyToLift] = useState(false);
  const [value, setValue] = useState(editable?.data.weight ?? '');

  const handleLockClick = () => {
    setLockWeight(!lockWeight);
    setReadyToLift(false);
  };
  const handleInputClick = () => {
    if (lockWeight && editable?.editableId) {
      setReadyToLift(!readyToLift);
      handleLiftLock(editable.editableId, value);
    }
  };

  const LockComponent = lockWeight ? LockOutlinedIcon : LockOpenOutlinedIcon;

  return (
    <>
      {editable && !content ? (
        <Box
          sx={[
            styles.box,
            lockWeight && styles.boxLock,
            readyToLift && styles.boxReady,
            editable.data.status === STryStatus.SUCCESS && styles.boxSuccess,
          ]}
        >
          <InputBase
            sx={styles.input}
            placeholder="Kg"
            type="number"
            disabled={lockWeight}
            onClick={handleInputClick}
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

export default RenderCell;
