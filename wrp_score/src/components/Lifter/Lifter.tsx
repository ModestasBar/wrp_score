import { Card } from "@mui/material";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IdummyData } from "../../App";

interface IProps {
  lifter: IdummyData;
}

const Lifter: React.FC<IProps> = ({ lifter }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {`${lifter.name} ${lifter.surname} ${lifter.age}`}
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography variant="body2">
          {`${lifter.name} ${lifter.surname} ${lifter.age}`}.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Lifter;
