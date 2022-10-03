import { Box } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';
import { styles } from './EditableField.styles';
import { IParticipant } from '../../dto/participant.dto';
import { ICompRow } from '../../pages/Competition/Competition.columns';

interface IProps extends Omit<ICompRow, 'editable'> {
  data: IParticipant;
}

const EditableField: React.FC<IProps> = ({ data, content }: any) => {
  const [lockWeight, setLockWeight] = useState(false);
  const [readyToLift, setReadyToLift] = useState(false);

  const handleLockClick = () => {
    setLockWeight(!lockWeight);
    setReadyToLift(false);
  };
  const handleInputClick = () => {
    if (lockWeight) {
      setReadyToLift(!readyToLift);
    }
  };

  const LockComponent = lockWeight ? LockOutlinedIcon : LockOpenOutlinedIcon;

  return (
    <Box
      sx={[
        styles.box,
        lockWeight && styles.boxLock,
        readyToLift && styles.boxReady,
        Boolean(content?.status) && styles.boxSuccess,
      ]}
    >
      <InputBase
        sx={styles.input}
        placeholder='Kg'
        type='number'
        disabled={lockWeight}
        onClick={handleInputClick}
        defaultValue={content.weight}
      />
      <Divider sx={{ height: 20, m: 0.1 }} orientation='vertical' />
      <IconButton color='primary' aria-label='directions'>
        <LockComponent onClick={handleLockClick} />
      </IconButton>
    </Box>
  );
};

export default EditableField;
