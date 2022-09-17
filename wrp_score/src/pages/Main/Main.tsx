import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { IdummyData } from '../../App';
import Lifter from '../../components/Lifter';

const Main = () => {
  const [participants, setParticipants] = useState<IdummyData[]>([]);

  useEffect(() => {
    fetch('http://localhost:3004/participants')
      .then(async (resp) => await resp.json())
      .then((res) => setParticipants(res))
      .catch((e) => e);
  }, []);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {participants.map((lifter, index) => (
        <Grid key={index} item xs={12} md={6} lg={4}>
          <Lifter lifter={lifter} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Main;
