import { Grid } from '@mui/material';
import { useGetParticipantsQuery } from '../../api/participantsApi';
import { IdummyData } from '../../App';
import Lifter from '../../components/Lifter';
import LoadingSpinner from '../../components/LoadingSpinner';

const Main = () => {
  const { data, isLoading, isSuccess } = useGetParticipantsQuery({});

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {isSuccess && (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {data?.map((lifter: IdummyData, index: number) => (
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
