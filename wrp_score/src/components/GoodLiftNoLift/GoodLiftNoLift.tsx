import { Button } from '@mui/material';
import { Box } from '@mui/system';

interface IProps {
  isLoading: boolean;
}

const GoodLiftNoLift: React.FC<IProps> = ({ isLoading }) => {
  const handleNoLift = () => {};
  const handleGoodLift = () => {};

  return (
    <Box display='flex' position='absolute' bottom={0} right={0} p={2}>
      <Button
        disabled={isLoading}
        color='error'
        variant='contained'
        sx={{ mr: 2 }}
        onClick={handleNoLift}
      >
        No Lift
      </Button>
      <Button
        color='success'
        variant='contained'
        disabled={isLoading}
        onClick={handleGoodLift}
      >
        Good Lift
      </Button>
    </Box>
  );
};

export default GoodLiftNoLift;
