import { Grid } from '@mui/material'
import { dummyData, IdummyData } from '../../App'
import Lifter from '../../components/Lifter'

const Main = () => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {dummyData.map((lifter, index) => (
        <Grid key={index} item xs={12} md={6} lg={4}>
          <Lifter lifter={lifter} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Main
