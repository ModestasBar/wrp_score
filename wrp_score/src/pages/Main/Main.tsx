import { Grid } from '@mui/material';
import { useGetParticipantsQuery } from '../../api/participantsApi';
import Lifter from '../../components/Lifter';
import LoadingSpinner from '../../components/LoadingSpinner';

export interface ILifterInfo {
  name: string;
  surname: string;
  age: string;
}

const Main = () => {
  const {
    data: participantsList,
    isLoading,
    isSuccess,
  } = useGetParticipantsQuery({});

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {isSuccess && (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {participantsList.map((lifter, index: number) => (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <Lifter lifter={lifter} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Main;
