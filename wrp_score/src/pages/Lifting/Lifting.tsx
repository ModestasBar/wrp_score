import { Button, Grid, Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const liftersMock = [
  {
    name: "Modestas",
    surname: "Baranauskas",
    s1: {
      weight: "12",
      status: false,
    },
    s2: {
      weight: "78",
      status: false,
    },
    s3: {
      weight: "98",
      status: false,
    },
    total: 56,
    points: 45,
    place: 1,
  },
  {
    name: "Modestas",
    surname: "Baranauskas",
    s1: {
      weight: "12",
      status: false,
    },
    s2: {
      weight: "78",
      status: false,
    },
    s3: {
      weight: "98",
      status: false,
    },
    total: 56,
    points: 45,
    place: 1,
  },
  {
    name: "Modestas",
    surname: "Baranauskas",
    s1: {
      weight: "12",
      status: false,
    },
    s2: {
      weight: "78",
      status: false,
    },
    s3: {
      weight: "98",
      status: false,
    },
    total: 56,
    points: 45,
    place: 1,
  },
];

const Lifting = () => {
  const [lifters, setLifters] = useState(liftersMock);
  const [lifter, setLifter] = useState(null);

  const selectLifter = (lifter: any) => {
    setLifter(lifter);
  };

  const handleNoLift = () => {
    lifters.forEach((lifter) => {
      lifter.s1.status = true;
    });
  };

  return (
    <>
      {JSON.stringify(lifter)}
      <Grid container spacing={4}>
        {lifters.map((lifter: any) => (
          <>
            <Grid item xs={4}>
              {`${lifter.name} ${lifter.surname}`}
            </Grid>
            <Grid container item xs={4} spacing={2}>
              <Grid item xs={4}>
                <TextField
                  id="standard-basic"
                  label="S1"
                  variant="standard"
                  onBlur={() => selectLifter(lifter)}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField id="standard-basic" label="S2" variant="standard" />
              </Grid>
              <Grid item xs={4}>
                <TextField id="standard-basic" label="S3" variant="standard" />
              </Grid>
            </Grid>
            <Grid container item xs={4} spacing={2}>
              <Grid item>{lifter.total}</Grid>
              <Grid item>{lifter.points}</Grid>
              <Grid item>{lifter.place}</Grid>
            </Grid>
          </>
        ))}
      </Grid>
      <Box display="flex" position="absolute" bottom={0} right={0} p={2}>
        <Button
          color="error"
          variant="contained"
          sx={{ mr: 2 }}
          onClick={handleNoLift}
        >
          No Lift
        </Button>
        <Button color="success" variant="contained">
          Good Lift
        </Button>
      </Box>
    </>
  );
};

export default Lifting;
