import { Button, Grid, Input, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import EditableField from '../../components/EditableField'
import TextBox from '../../components/TextBox'
import { styles } from './Lifting.styles'

const liftersMock = [
  {
    name: 'Modestas',
    surname: 'Baranauskas',
    gender: 'M',
    bodyWeight: 70,
    classCategory: '75',
    s1: {
      weight: '12',
      status: false
    },
    s2: {
      weight: '78',
      status: false
    },
    s3: {
      weight: '98',
      status: false
    },
    total: 56,
    points: 45,
    place: 1
  },
  {
    name: 'Modestas',
    surname: 'Baranauskas',
    gender: 'F',
    bodyWeight: 70,
    classCategory: '75',
    s1: {
      weight: '12',
      status: false
    },
    s2: {
      weight: '78',
      status: false
    },
    s3: {
      weight: '98',
      status: false
    },
    total: 56,
    points: 45,
    place: 1
  },
  {
    name: 'Modestas',
    surname: 'Baranauskas',
    gender: 'F',
    bodyWeight: 85,
    classCategory: '90',
    s1: {
      weight: '12',
      status: false
    },
    s2: {
      weight: '78',
      status: false
    },
    s3: {
      weight: '98',
      status: false
    },
    total: 56,
    points: 45,
    place: 1
  }
]

enum columId {
  Name,
  Gender,
  BodyWeight,
  ClassCategory,
  S1,
  S2,
  S3,
  Total,
  Points,
  Place,
}

const gridColumn = [
  {
    label: 'Name',
    id: columId.Name
  },
  {
    label: 'Gender',
    id: columId.Gender
  },
  {
    label: 'Body Weight',
    id: columId.BodyWeight
  },
  {
    label: 'Category',
    id: columId.ClassCategory
  },
  {
    label: 'S1',
    id: columId.S1
  },
  {
    label: 'S2',
    id: columId.S2
  },
  {
    label: 'S3',
    id: columId.S3
  },
  {
    label: 'Best lift',
    id: columId.Total
  },
  {
    label: 'Points',
    id: columId.Points
  },
  {
    label: 'Place',
    id: columId.Place
  }
]

const Lifting = () => {
  const [lifters, setLifters] = useState(liftersMock)
  const [lifter, setLifter] = useState(null)

  const selectLifter = (lifter: any) => {
    setLifter(lifter)
  }

  const handleNoLift = () => {
    lifters.forEach((lifter) => {
      lifter.s1.status = true
    })
  }

  return (
    <>
      <Grid container spacing={2}>
        {lifters.map((lifter) => (
          <>
            <Grid container item xs={3} spacing={2}>
              <Grid item>
                <TextBox>{`${lifter.name} ${lifter.surname}`}</TextBox>
              </Grid>
              <Grid item>
                <TextBox>{`${lifter.gender}`}</TextBox>
              </Grid>
              <Grid item>
                <TextBox>{`${lifter.bodyWeight}`}</TextBox>
              </Grid>
              <Grid item>
                <TextBox>{`${lifter.classCategory}`}</TextBox>
              </Grid>
            </Grid>
            <Grid item xs={2} sx={styles.resultsColumn}>
              <EditableField />
            </Grid>
            <Grid item xs={2} sx={styles.resultsColumn}>
              <EditableField />
            </Grid>
            <Grid item xs={2} sx={styles.resultsColumn}>
              <EditableField />
            </Grid>
            <Grid container item xs={3} spacing={2}>
              <Grid item>
                <TextBox>{lifter.total}</TextBox>
              </Grid>
              <Grid item>
                <TextBox>{lifter.points}</TextBox>
              </Grid>
              <Grid item>
                <TextBox>{lifter.place}</TextBox>
              </Grid>
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
  )
}

export default Lifting
