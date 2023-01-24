import { Button } from '@mui/material';
import { Box } from '@mui/system';

interface IProps {
  isLoading: boolean;
  handleGoodLift: () => void;
  handleBadLift: () => void;
}

const GoodLiftNoLift: React.FC<IProps> = ({
  isLoading,
  handleBadLift,
  handleGoodLift,
}) => {
  return (
    <Box display="flex" position="absolute" bottom={0} right={0} p={2}>
      <Button
        disabled={isLoading}
        color="error"
        variant="contained"
        sx={{ mr: 2 }}
        onClick={handleBadLift}
      >
        No Lift
      </Button>
      <Button
        color="success"
        variant="contained"
        disabled={isLoading}
        onClick={handleGoodLift}
      >
        Good Lift
      </Button>
    </Box>
  );
};

export default GoodLiftNoLift;
