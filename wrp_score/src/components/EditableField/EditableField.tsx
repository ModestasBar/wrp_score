import { Box } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';
import { styles } from './EditableField.styles';

const EditableField = ({ content, handleLiftLock }: any) => {
  const [lockWeight, setLockWeight] = useState(false);
  const [readyToLift, setReadyToLift] = useState(false);

  const handleLockClick = () => {
    setLockWeight(!lockWeight);
    setReadyToLift(false);
    handleLiftLock();
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
        placeholder="Kg"
        type="number"
        disabled={lockWeight}
        onClick={handleInputClick}
        defaultValue={content.weight}
      />
      <Divider sx={{ height: 20, m: 0.1 }} orientation="vertical" />
      <IconButton color="primary" aria-label="directions">
        <LockComponent onClick={handleLockClick} />
      </IconButton>
    </Box>
  );
};

export default EditableField;
