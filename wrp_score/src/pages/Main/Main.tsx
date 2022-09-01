import { Grid } from "@mui/material";
import { IdummyData } from "../../App";
import Lifter from "../../components/Lifter";

interface IProps {
  lifters: IdummyData[];
}

const Main: React.FC<IProps> = ({ lifters }) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {lifters.map((lifter: any) => (
        <Grid item xs={12} md={6} lg={4}>
          <Lifter lifter={lifter} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Main;
